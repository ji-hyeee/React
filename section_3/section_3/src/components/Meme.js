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
// Props vs State Quiz

// 1. How would you describe the concept of "state"?
// 1. "state"의 개념을 어떻게 설명하시겠습니까?

// 컴포넌트 내부에서 데이터 값을 다룰 때 사용

// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)
// React가 컴포넌트 내에서 저장된 값을 기억하는 방법입니다.
// 이것은 컴포넌트 내에서 변수를 선언하는 것과 유사합니다.
// 몇 가지 추가된 보너스와 함께(나중에 다루겠습니다)


// 2. When would you want to use props instead of state?
// 2. state 대신 props를 사용하고 싶은 때는 언제인가요?

// 부모 컴포넌트에서 값을 받을 때, 값을 수정하지 않을 때

// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.
// 구성 요소에 데이터를 전달하고 싶을 때마다
// 구성 요소는 화면에 표시할 내용을 결정할 수 있습니다.
// 화면.


// 3. When would you want to use state instead of props?
// 3. 언제 props 대신 state를 사용하고 싶습니까?

// 컴포넌트 내부에서 변경하고 싶은 데이터가 있을 때 사용할 수 있다
// 변경 된 데이터를 재렌더링 할 때

// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).
// 구성 요소가 일부 값을 유지하기를 원할 때마다
// 구성 요소 내에서. (그리고 그 값을 "기억"하십시오.
// React가 구성 요소를 다시 렌더링할 때).



// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// 4. "불변"이란 무엇을 의미합니까? 소품은 변경할 수 없나요? 상태는 불변인가?

// 변하지 않는 값 (수정할 수 없는 값)
// props === immutable
// state !== immutable

// Unchanging. Props are immutable. State is mutable.
// 변하지 않는. 소품은 변경할 수 없습니다. 상태는 변경 가능합니다.