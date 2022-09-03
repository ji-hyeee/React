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

// 3. Build a Meme Generator
// useState - Changing state with a Callback Function

// useState의 두번째 인자인 함수의 파라미터에 콜백 함수를 넣어주자
// 콜백 함수를 제공하면 새로운 상태 값을 결정하기 위해 이전 상태 값을 사용할 때마다 콜백함수를 파라미터로 전달한다
// 오래된 값을 가져와서 함수가 호출되었을 때 카운트에 대한 참조로 사용할 수 있다 (렌더링 관련)

// 상태의 새 값을 결정하기 위해 이전 상태 값을 사용해야 하는 경우
// 항상 카운트를 설정하는 함수를 전달하도록 계획해야한다고 간단하게 정리하기

// const [count, setCount] = React.useState(0);

// const minus = () => {
//     setCount(count - 1)
// }

// 그냥 함수 (인자가 콜백함수)
// function minus(){
//     setCount(function(oldValue){
//         return oldValue - 1
//     })
// }

// 화살표 함수로 만들기
// function minus(){
//     setCount(oldValue => oldValue - 1)
// }

// 따라서 상태의 새 값을 결정하는 데 도움이 되는 상태의 이전 값이 필요한 경우 또는 상태의 새 값이 상태의 이전 값이 무엇인지 아는 데 의존하는 경우

// 여기에서 하는 것처럼 상태를 직접 사용하는 대신 항상 상태 설정자 함수에 콜백 함수를 전달해야 합니다.