import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeProvider } from '@material-ui/core'
import { theme } from '../../utils/theme'
import App from '../App'

const Root: React.FC = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </QueryClientProvider >
    )
}

export default Root