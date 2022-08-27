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
// useState arrary destructuring / 배열 구조 분해

// const result = React.useState('Hello')
// console.log(result)
// >>> ['Hello', f()]

// 배열이라는 걸 알았으니 할당할 때부터 구조 분해를 해버리자
// const [result, function] = React.useState('wow')
// console.log(result)
// >>> 'wow'

// return(
//     <h1>{result}</h1> // >>> 구조분해 할당으로 받았으니 0번째 index가 아닌 result 자체를 줍시다
// )