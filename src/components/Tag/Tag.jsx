import React from 'react'
import './_Tag.scss'

export default function Tags(props) {
    return (
        <div className="tag-container">
            {props.tagName}
        </div>
    )
}
