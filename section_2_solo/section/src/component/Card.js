import React from "react"

export default function Card(props) {
    return (
        <div className="card_container">
            <img className="card_image" src={props.imageUrl} alt="img" />
            <section>
                <p className="card_location">
                    <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-location_on.svg" alt="location" />
                    <span>{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <p className="card_date">{props.startDate}-{props.endDate}</p>
                <p className="card_description">{props.description}</p>
            </section>
        </div>
    )
}