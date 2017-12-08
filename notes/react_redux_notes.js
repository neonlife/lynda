// -------------------------------------------------------
export class AddDayForm extends Component {
	...
}

// Default Props
AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


// Prop Types
AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}

// -------------------------------------------------------
// Set initial state
export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
		}
	}
}

// -------------------------------------------------------
// React Router
// npm install react-router@3.0.0 --save

// index.js
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list-days" component={App}>
			<Route path=":filter" component={App} /> // /list-days/{filter}
		</Route>
		<Route path="add-day" component={App} />
		<Route path="*" component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)

this.props.location.pathname === "/" ? <A></A> : <B></B>

// Navigation
// menu.js Added to App.js
import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () =>
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<HomeIcon />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<AddDayIcon />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<ListDaysIcon />
		</Link>
	</nav>

// Nesting routes
export const Left = ({ children }) =>
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

// routes.js
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)
// -------------------------------------------------------
// React form component
// Use refs to pass properties from child to parent component
export const AddDayForm = ({ resort,
							 date,
							 powder,
							 backcountry,
							 onNewDay }) => {

	let _resort, _date, _powder, _backcountry

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		})
		_resort.value = ''
		_date.value = ''
		_powder.checked = false
		_backcountry.checked = false

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="resort">Resort Name</label>
			<input id="resort"
				   type="text"
				   required
				   defaultValue={resort}
				   ref={input => _resort = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="powder"
					   type="checkbox"
					   defaultChecked={powder}
					   ref={input => _powder = input}/>
				<label htmlFor="powder">Powder Day</label>
			</div>

			<div>
				<input id="backcountry"
					   type="checkbox"
					   defaultChecked={backcountry}
					   ref={input => _backcountry = input}/>
				<label htmlFor="backcountry">
					Backcountry Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

// Two-way function binding
// App.js
export class App extends Component {
	constructor(props) {
		...
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	render() {
		return (
			...
			 	<AddDayForm onNewDay={this.addDay}/> :
		)
	}
}

// Autocomplete
class Autocomplete extends Component {

	get value() {
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputResort"
					   type="text"
					   list="tahoe-resorts" />
				<datalist id="tahoe-resorts">
					{this.props.options.map((opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}
const tahoeResorts = ["Alpine Meadows", "Boreal", ...]
export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {
	...
	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="resort">Resort Name</label>
			<Autocomplete options={tahoeResorts}
				   		  ref={input => _resort = input}/>
			...
		</form>
	)
}

// Fetching remote data before rendering
import fetch from 'isomorphic-fetch'

constructor(props) {
    super(props)
    this.state = {
        members: [],
        loading: false
    }
}

componentDidMount() {
    this.setState({loading: true})
    fetch('https://api.randomuser.me/?nat=US&results=12')
        .then(response => response.json())
        .then(json => json.results)
        .then(members => this.setState({
            members,
            loading: false
        }))
}
