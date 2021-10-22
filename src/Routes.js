import React from 'react'

// import components
//import Quotes from './Qutoes'
//import Users from './Users'
import myCalendar from './Calendar'

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
            {/** <Link to="/quotes">Quotes</Link> */}
            {/** <Link to="/users">Users</Link>} */}
            <Link to="/calendar">Calendar</Link>
            {/** Defining the switches, render the matching components */}
            <Switch>
                {/** <Route path="/music" component={Songs}/> */}
                {/** <Route path="/users" component={Users}/> */}
                <Route path="/calendar" component={myCalendar}/>
            </Switch>
        </Router>
    )
}

export default Routes