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

// 2. Build an AirBnb Experiences Clone
// Review - array.map()

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const sum = nums.map(num => num * num);
console.log(sum);

// 선언식을 쓰다니... 머리아프군...
// 화살표에 중독되어버린 나...
// 다시보니 표현식이었군 맞나...
// ref
// const sum = nums.app(function(e)){
//  return e * e
// })


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

// 이거 맞냐...
const up = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(up)

// ref
// oh my gosy 맞았다리
// const up = names.map(name=>{
//     return name[0].toUpperCase() + name.slice(1)
// })

// 탬플릿리터럴 써보기
// 가독성이 안 좋아서 기존 코드를 사용했다
// return `${name[0].toUpperCase()}${name.slice(1)}`

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

// 오케이 ~
const tag = pokemon.map(el => `<p>${el}</p>`)
console.log(tag)

// ref
// 나랑 그냥 똑같이 썼음 
// const tag = pokemon.map(mon=>{
//     return `<p>${mon}</p>`
// })