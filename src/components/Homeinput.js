import React, { Component } from 'react'
import { containers, texts, inputs } from '../styles'

export default class Homeinput extends Component {
    render() {
        return (
            <containers.homeinput>
                <texts.home>Watch YouTube videos at the same time with your friends !</texts.home>
                <inputs.homebackground>
                    <inputs.home placeholder={'https://www.youtube.com/watch?v=UR0FW0v6m7Y'} />
                    <inputs.homebutton>Start watching</inputs.homebutton>
                </inputs.homebackground>
            </containers.homeinput>
        )
    }
}
