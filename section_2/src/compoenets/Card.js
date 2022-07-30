import React from "react"

export default function Card(props) {
  // props 확인하기
  // console.log(props)
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

// 2. Build an AirBnb Experiences Clone
// Project: Pass props to card components

// props
// img="https://pbs.twimg.com/media/FYMzp5LVEAAqFVu?format=jpg&name=large"
// rating="5.0"
// reviewCount={6}
// country="Seoul"
// title="The Man Who Laughs"
// price="150,000"

// JS 를 사용하기 위해서 {중괄호} 를 사용하자!
// 이름 자체를 넘겨줄때 { img, price ... }
// props 통째로 넘길때 prop(아무거나 써도됨)

// 이미지파일 넘길때 신기하게 하길래...
// {`../images/${img}`}