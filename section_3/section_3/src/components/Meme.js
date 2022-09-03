import React from "react"
import memesData from "../memesData"

export default function Meme() {
    // 3. Build a Meme Generator
    // Project: Add images to the meme generator

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     * 
     * 과제: 임의의 밈 URL을 상태에 저장
     * - 기본적으로 빈 문자열을 사용하여 `memeImage`라는 새 상태를 만듭니다.
     * - getMemeImage 함수가 호출되면 `memeImage` 상태를 무작위로 선택된 이미지 URL로 업데이트합니다.
     * - div.form 아래에 <img />를 추가하고 src를 새로 만든 `memeImage` 상태로 설정합니다.
     */

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