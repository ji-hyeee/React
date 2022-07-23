import React from "react"

export default function Card() {

  const firstName = "박"
  const lastName = "강현"

  const date = new Date()
  const hours = date.getHours()

  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

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
      <div>
        {/* 2. Build an AirBnb Experiences Clone */}
        {/* Aside: JS Inside JSX */}
        <h1>Hello {firstName}{lastName} !</h1>
        <h1>It is currently about {date.getHours() % 12} o'clock !</h1>
        <h1>It is currently about {new Date().getHours() % 12} o'clock !</h1>
        <h1>It is currently about {hours} o'clock !</h1>
        <h1>Good {timeOfDay}!</h1>
      </div>
    </div>
  )
}
