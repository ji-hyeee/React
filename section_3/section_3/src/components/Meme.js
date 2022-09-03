import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }

    return (
        <main>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
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
            <div className="meme_image" >
                <img src={memeImage} alt='meme_image' />
            </div>
        </main>
    )
}

// 3. Build a Meme Generator
// Challenge: Ternary Practice
// 응용: 삼항 연습

/**
 * Challenge: Replace the if/else below with a ternary
 * to determine the text that should display on the page
 * 과제: 아래의 if/else를 삼항으로 대체하여 페이지에 표시할 텍스트를 결정합니다.
 */

// const TorF = false;

// let answer = (TorF === true) ? "Yes" : "No"

// return(
//     <div>{answer}</div>
// )

/**
* Challenge: move our ternary directly inside of the JSX
* so the "Yes" and "No" are determined inside the <h1>
*
* Hint: you will no longer need the `answer` variable
*
* 과제: 삼항을 JSX 내부로 직접 이동
* 그래서 "Yes"와 "No"는 <h1> 내부에서 결정됩니다.
*
* 힌트: 더 이상 `answer` 변수가 필요하지 않습니다.
*/

// const TorF = true

// return(
//     <h1>{TorF ? "Yes" : "No"}</h1>
// )