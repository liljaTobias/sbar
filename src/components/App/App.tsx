import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import OverviewPage from '../OverviewPage'
import { Container, makeStyles, Typography } from '@material-ui/core'
import StepperPage from '../StepperPage/StepperPage'

const useStyles = makeStyles({
    h1: {
        fontSize: '2em'
    }
})

const App: React.FC = () => {
    const styles = useStyles()
    return (
        <Router>
            <Switch>
                <Route path="/stepper" component={StepperPage} />
                <Route path="/" component={OverviewPage} />
            </Switch>
        </Router>
    )
}

export default App