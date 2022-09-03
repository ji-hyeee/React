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
// Changing State Quiz!

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
// 1. 상태 설정자 함수(예: `setCount`)에 전달할 수 있는 항목에는 2가지 옵션이 있습니다. 그들은 무엇인가?

// just code...?
// callback function

// ref//
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state
// a. 상태의 새 값(setCount(42))
// b. 콜백 함수 - 모든 콜백 함수
//     반환 === 상태의 새 값
    


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// 2. 첫 번째 옵션(위의 답변에서)을 언제 상태 설정자 함수에 전달하시겠습니까?

// 그냥 냅다.. 
// 모르겠는데요 솔직히

// ref//
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.
// 상태의 새 값이 무엇인지 결정하기 위해 이전 상태 값이 필요하지 않을 때마다.



// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// 3. 두 번째 옵션(위의 답변에서)을 언제 상태 설정자 함수에 전달하시겠습니까?

// 예전 상태값을 가져와서 또 다시 렌더링 해야할 때

// ref//
// Whenever you DO need the previous value to determine the new value
// 새 값을 결정하기 위해 이전 값이 필요할 때마다
