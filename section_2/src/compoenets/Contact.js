import React from "react"

export default function Contact(props) {

    console.log(props.datas2)
    return (
        <div className="contact-card">
            <img src={props.datas2.img} alt="img" />
            <h3>{props.datas2.name}</h3>
            <div className="info-group">
                <p>{props.datas2.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.datas2.email}</p>
            </div>
        </div>
    )
}