import React, { Component } from 'react'

const MainContext = React.createContext('Theme')
const MainConsumer = MainContext.Consumer

const initialState = {
    url: '',
    user: {
        id: null,
        username: ''
    },
    room: {
        id: null,
        users: []
    }
}

class MainProvider extends Component {
    constructor() {
        super()
        this.state = initialState

        this.actions = {
            start: this.start.bind(this),
        }
    }

    start() {
        return true
    }

    render () {
        return (
            <MainContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainContext,
    MainProvider,
    MainConsumer
}