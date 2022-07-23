import React from "react"

export default function Card() {
  return (
    <div className="card">
      <img src="https://pbs.twimg.com/media/FYMzp5LVEAAqFVu?format=jpg&name=large" alt="card1" className="card--image" />
      <div className="card--stats">
        <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mt-star.svg" alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Park Kang Hyun</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}



