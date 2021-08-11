import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import OverviewPage from '../OverviewPage'
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    h1: {
        fontSize: '2em'
    }
})

const App: React.FC = () => {
    const styles = useStyles()
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" className={styles.h1}>Rapporteringsstöd</Typography>
            <Router>
                <Switch>
                    <Route path="/" component={OverviewPage} />
                </Switch>
            </Router>
        </Container>
    )
}

export default App