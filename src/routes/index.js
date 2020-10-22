import React, { Component } from 'react'
import { Home, NoMatch, Player } from '../containers'
import { Switch, Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (  
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/player/:roomID?" component={Player} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}