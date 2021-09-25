import React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import ListPage from '../List'

import { useStyles } from './App.style'

const App: React.FC = () => {
    const classes = useStyles()

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/sbar/:tab" component={ListPage} />
                </Switch>
            </Router>
        </>
    )
}

export default App
