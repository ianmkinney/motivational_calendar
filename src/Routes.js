import React from 'react'

// import components
import Quotes from './Quotes'
import Users from './Users'
import myCalendar from './Calendar'
import CreateQuote from './AddQuoteForm'

// import react-dom-router dependencies
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


function Routes() {
    return (
        <Router>
            {/** Defining the Link (clickable) */}
            <Link to="/quotes">Quotes</Link>
            <Link to="/users">Users</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/addquote">Add quote</Link>
            {/** Defining the switches, render the matching components */}
            <Switch>
                <Route path="/quotes" component={Quotes}/>
                <Route path="/users" component={Users}/>
                <Route path="/calendar" component={myCalendar}/>
                <Route path="/addquote" component = {CreateQuote}/>
            </Switch>
        </Router>
    )
}

export default Routes