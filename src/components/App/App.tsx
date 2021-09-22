import React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import ListPage from '../List'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../../utils/theme'
import Dashboard from '../Dashboard'

const App: React.FC = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/" component={ListPage} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </QueryClientProvider >
    )
}

export default App