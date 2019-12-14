const Header = () => {
    return (
        <header>
            <h1>Zegar w react</h1>
            <p>wyświetla bieżącą datę i godzinę (tylko i aż)</p>
            <p>zmiana stanu co sekundę w module zegara</p>
        </header>
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
	return <span>{ date.getMinutes() }</span>
}

function ClockSecond({date}) {
	return <span>{ date.getSeconds() }</span>
}
/* zegar całość: */
function ClockTime({ date }) {
    return (
		<h1>
			<ClockHour date={date}/>:
			<ClockMinute date={date}/>:
			<ClockSecond date={date}/>
		</h1>
    );
}

/* data: rok, miesiąc, dzień */
function ClockDateYear({date}) {
	return <span> { date.getFullYear() }</span>
}

function ClockDateMonth ({date}) {
	return <span> { date.getMonth() + 1 } </span>
}

function ClockDateDay ({date}) {
	return <span>{ date.getDate() }</span>
}
/* data całość: */
function ClockDate({ date }) {
    return (
    	<h4>
			<ClockDateYear date={date}/>:
			<ClockDateMonth date={date}/>:
			<ClockDateDay date={date}/>
		</h4>
	);
}

function App() {
    return (
    	<React.Fragment>
            <Header />
            <Clock />
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);








