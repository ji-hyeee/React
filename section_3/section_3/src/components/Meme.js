import React from "react"
import memesData from "../memesData"

export default function Meme() {
    // eventListener practice
    function handleMouseOver() {
        console.log("mouseOver")
    }

    function handleClick() {
        console.log("click")
    }

    // 3. Build a Meme Generator
    // Project: Get random meme

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
            <div className="event-container">
                <img src="https://pbs.twimg.com/media/FawoAzxVUAA7myJ?format=jpg&name=large" alt="kang" onMouseOver={handleMouseOver} />
                <button onClick={handleClick}>click me!</button>
            </div>
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
// Project: Get random meme

// 이미지 데이터가 들어있는 배열 랜덤으로 가져오기
// const 배열 = data.memes
// const 랜덤 = Math.floor(Math.random() * 배열.length)
// url = 배열[랜덤].url