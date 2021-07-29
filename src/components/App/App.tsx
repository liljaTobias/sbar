import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LandingPage from '../landingpage/'
import Parsed from '../parsed/'

const App: React.FC = () => {
    const [test, setTest] = useState('hejsan')
    return (
        <Router>
            <Switch>
                <Route path="/parsed/:url" component={Parsed} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default App