import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import history from './routes/history'
import Routes from './routes/index'
import { MainProvider } from './stores/MainStore'
import { CThemeProvider, CThemeConsumer } from './stores/ThemeStore'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <MainProvider>
        <CThemeProvider>
            <CThemeConsumer>
                {({state}) => (
                    <ThemeProvider theme={state[state.currentTheme]}>
                        <Router history={history}>
                            <GlobalStyles />
                            <Routes />
                        </Router>
                    </ThemeProvider>
                )}
            </CThemeConsumer>
        </CThemeProvider>
    </MainProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()