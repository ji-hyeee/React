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
// useState - Counter Practice

// state를 사용해서 카운트 만들기

// const [count, setCount] = React.useState(0);

// const minus = () => {
//     setCount(count - 1)
// }

// const plus = () => {
//     setCount(count + 1)
// }
// return (
//     <>
//         <button onClick={minus}>-</button>
//         <div>{count}</div>
//         <button onClick={plus}>+</button>
//     </>
// )

// 또 다른 문제 발생 state 에 값을 요상하게 받고 있다 ?