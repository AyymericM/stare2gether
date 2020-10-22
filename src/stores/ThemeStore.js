import React, { Component } from 'react'

const CThemeContext = React.createContext('Theme')
const CThemeConsumer = CThemeContext.Consumer

const initialState = {
    currentTheme: 'light',
    dark: {
        type: 'dark',
        bg: 'black',
        fontColor: 'white'
    },
    light: {
        type: 'light',
        bg: 'white',
        fontColor: 'black'
    }
}

class CThemeProvider extends Component {
    constructor() {
        super()
        this.state = initialState

        this.actions = {
            switchTheme: this.switchTheme.bind(this),
        }
    }

    switchTheme() {
        const newTheme = this.state.currentTheme === 'light' ? 'dark' : 'light'
        this.setState({
            currentTheme: newTheme
        })
    }

    render () {
        return (
            <CThemeContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </CThemeContext.Provider>
        )
    }
}

export {
    CThemeContext,
    CThemeProvider,
    CThemeConsumer
}