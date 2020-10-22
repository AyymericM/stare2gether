import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Navbar } from '../../components'
import { containers } from '../../styles'

export default class Player extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.roomID)
    }
    
    render() {
        if (!this.props.match.params.roomID) return <Redirect to={'/'} />

        return (
            <containers.main>
                <Navbar />
                <p>{this.props.match.params.roomID}</p>
            </containers.main>
        )
    }
}