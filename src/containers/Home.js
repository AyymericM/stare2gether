import React, { Component } from 'react'
import { Navbar, Homeinput } from '../components'
import { containers } from '../styles'

export default class Home extends Component {
    render() {
        return (
            <containers.main>
                <Navbar />
                <Homeinput />
            </containers.main>
        )
    }
}