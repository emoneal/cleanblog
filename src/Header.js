import React from "react"

export default function Header() {
    return (
        <>
            <div className="header--container">
                <img 
                    src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg"
                    alt= "headerimg"
                    className="header--image"
                />
                <div className="header--titletext">
                    <h1>Clean Blog</h1>
                </div>
            </div>
        </>
    )
}