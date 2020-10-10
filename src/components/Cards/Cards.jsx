import React, { Component } from 'react'
import './_Cards.scss'
import Card from '../Card/Card'

export default class Cards extends Component {
    render() {
        return (
            <div className="cards-container">
                {
                    this.props.cards.map((card) => (
                        <Card card={card}></Card>
                    ))
                }
            </div>
        )
    }
}
