import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            {/* 2. Build an AirBnb Experiences Clone */}
            {/* Props Part 4: receiving props in a component */}
            {/* receiving: 전수 */}
            <img src={props.img} alt="img" />
            <h3>{props.name}n</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
    )
}

