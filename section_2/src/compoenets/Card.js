import React from "react"

export default function Card(props) {
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

// 2. Build an AirBnb Experiences Clone
// Problem - Not Reusable

// 하드코딩으로 재사용할 수 없다
// 반복적인 구성 요소는 어디서나 볼 수 있다
// 자동적으로 업데이트 되도록 만들어보자
// props

// 2. Build an AirBnb Experiences Clone
// Props Part 1: Understanding the Concept

{/* 
<html>
    <head></head>
    <body>
        <a href="https://google.com">This is a link</a>
        <img src="" />
        <input placeholder="First Name" type="submit"/>
    </body>
</html>

function addTwoNumbersTogether(a,b) {
    return a + b
}

// 제한적인 기능
// 매개변수를 넣어서 동적으로 변하게 한다 
*/}

// 2. Build an AirBnb Experiences Clone
// Props Part 2: Reusable Components

// 2. Build an AirBnb Experiences Clone
// Aside: JS Inside JSX