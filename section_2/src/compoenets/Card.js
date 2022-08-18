import React from "react"

export default function Card(props) {
  let badgeText;

  if (props.datas.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.datas.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--spots">{badgeText}</div>}
      <img src={props.datas.coverImg} alt="card1" className="card--image" />
      <div className="card--stats">
        <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mt-star.svg" alt="star" className="card--star" />
        <span>{props.datas.stats.rating}</span>
        <span className="gray">({props.datas.stats.reviewCount}) • {props.datas.location}</span>
      </div>
      <h3>{props.datas.title}</h3>
      <p><span className="bold">From ₩{props.datas.price}</span> / person</p>
    </div>
  )
}