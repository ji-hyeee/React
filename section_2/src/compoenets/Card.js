import React from "react"

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--spots">{badgeText}</div>}
      <img src={props.coverImg} alt="card1" className="card--image" />
      <div className="card--stats">
        <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mt-star.svg" alt="star" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
      </div>
      <h3>{props.title}</h3>
      <p><span className="bold">From ₩{props.price}</span> / person</p>
    </div>
  )
}