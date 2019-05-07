import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { containers, navbar } from '../styles'
import { CThemeConsumer } from '../stores/ThemeStore'

export default class Navbar extends Component {
    render() {
        return (
            <CThemeConsumer>
                {({actions}) => (
                    <containers.navbar>
                        <navbar.title>
                            <Link to={'/'}>Stare2gether</Link>
                        </navbar.title>
                        <navbar.switchicon onClick={() => actions.switchTheme()}></navbar.switchicon>
                        <navbar.menu>
                            <navbar.menulink>
                                <Link to={'/'}>Random Menu</Link>
                            </navbar.menulink>
                        </navbar.menu>
                    </containers.navbar>
                )}
            </CThemeConsumer>

        )
    }
}