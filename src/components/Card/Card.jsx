import React from 'react'
import './_Card.scss'
import Tag from '../Tag/Tag'

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-title">
                {props.card.title}
            </div>
            <div className="card-description">
                {props.card.description}
            </div>
            <div className="card-footer">
                <div className="card-tags">
                    {
                        props.card.tags.map((tag) => (
                            <Tag tagName={tag}></Tag>
                        ))
                    }
                </div>
                <div className="createdAt">
                    { new Date(props.card.createdAt).toDateString().slice(3)}
                </div>
            </div>
        </div>
    )
}
