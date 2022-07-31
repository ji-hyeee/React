import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card1" className="card--image" />
      <div className="card--stats">
        <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mt-star.svg" alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ₩{props.price}</span> / person</p>
    </div>
  )
}