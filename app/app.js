const Header = () => {
    return (
        <header>
            <h1>Zegar w react</h1>
            <p>wyświetla bieżącą datę i godzinę (tylko i aż)</p>
            <p>zmiana stanu co sekundę w module zegara</p>
        </header>
    )
}

const Footer = () => {
    return (
        <footer>
            <p>korzysta z react@16 i react-DOM development oraz babel.min standalone, co pozwala skupić się na samym <strong>react</strong></p>
            <p>czas oczywiście sieciowy <b>;-)</b></p>
            <p><a href="mailto:mpreus@onet.eu">napisz do autora</a></p>
        </footer>
    )
}

class Clock extends React.Component {
    state = {                     /* aktualna data */
        date: new Date()
    }
    /* uruchamianie interwału */
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({         /* zmiana aktualnej daty co sekundę */
                date: new Date()
            })
        }, 1000);
    }
    /* likwidacja interwału */
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    render() {
        return (
            <div>
                <ClockDate date={this.state.date} />
                <ClockTime date={this.state.date} />
            </div>
        )
    }
}

/* zegar: godziny, minuty, sekundy */
function ClockHour({date}) {
	return <span>{ date.getHours() }</span>
}

function ClockMinute({date}) {
	return <span>{ date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() }</span>
}
                /* ternary operator by wyświetlać: 01, 02, 03... jako minuty i sekundy, zamiast 1, 2, 3... */
function ClockSecond({date}) {
	return <span>{ date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds() }</span>
}
/* zegar całość: */
function ClockTime({ date }) {
    return (
		<h2>Bieżąca godzina:<span> </span>
			<ClockHour date={date}/>:
			<ClockMinute date={date}/>:
			<ClockSecond date={date}/>
		</h2>
    );
}

/* data: rok, miesiąc, dzień */
function ClockDateYear({date}) {
	return <span> { date.getFullYear() }</span>
}
/* miesiące (i dni tygodnia też) numerowane są począwszy od 0 */
function ClockDateMonth ({date}) {
	return <span> { date.getMonth() + 1 } </span>
}

function ClockDateDay ({date}) {
	return <span>{ date.getDate() }</span>
}
/* data całość: */
function ClockDate({ date }) {
    return (
    	<h3>Dzisiejsza data:<span> </span>
			<ClockDateYear date={date}/>:
			<ClockDateMonth date={date}/>:
			<ClockDateDay date={date}/>
		</h3>
	);
}

function App() {
    return (
    	<React.Fragment>
            <Header />
            <Clock />
            <Footer />
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);