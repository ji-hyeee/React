import React from "react"
import memesData from "../memesData"

export default function Meme() {
    // eventListener practice
    function handleMouseOver() {
        console.log("mouseOver")
    }

    // function handleClick() {
    //     console.log("click")
    // }

    let url

    function getMemeImage() {
        console.log('click')
        const urlData = memesData.data.memes
        // console.log(urlData)
        const randomNumber = Math.floor(Math.random() * urlData.length)
        // console.log(randomNumber)
        url = urlData[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <form className="form">
                <p>{url}</p>
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

// 3. Build a Meme Generator
// useState

// 리액트에서 state 사용하기

// 1. import 
// import React, {useState} from 'react'
// import App from "../App"

// 리액트를 import 한 것 처럼 구조분해할당으로 react hook인 useState를 불러온다


// 2. in componenet
// App(){
//     React.useState()
// }

// 컴포넌트 내부에서 가져온다
// 이게 더 명확해보인다고 한다


// Challenge: 
// Replace our hard-coded "Yes" on the page 
// with some state initiated with React.useState()

// const result = React.useState('Hello')

// return(
//     <h1>{result[0]}</h1>
// )

// useState 를 담은 변수 result를 console로 확인하면
// ['Hello', f()]
// 배열 안에 우리가 입력한 문자열과 함수가 나온다
// 우리가 입력한 문자열은 default value 가 된다 / 초기값