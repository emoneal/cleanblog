import React from 'react'

export default function BlogList(props) {
    return (
        <div className="bloglist--container">
            <h1 className="bloglist--title">{props.title}</h1>
            <h3 className="bloglist--subtitle">{props.subTitle}</h3>
            <p className="bloglist--authordate">Posted by {props.author} on {props.date}</p>
        </div>
    )
}