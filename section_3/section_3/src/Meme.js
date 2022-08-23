import React from "react"

export default function Meme() {
    // 3. Build a Meme Generator
    // Event Listeners

    // 이벤트 추가하는 두 가지 방법
    // 1. JS
    // .addEventLister("click", function(){})

    // 2. HTML
    // <div onclick="myFunction()"></div>

    // React
    // camelCase
    // use { }
    function handleMouseOver() {
        console.log("mouseOver")
    }

    function handleClick() {
        console.log("click")
    }

    return (
        <main>
            <div className="event-container">
                <img src="https://pbs.twimg.com/media/FawoAzxVUAA7myJ?format=jpg&name=large" alt="kang" onMouseOver={handleMouseOver} />
                <button onClick={handleClick}>click me!</button>
            </div>
            <form className="form">
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
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}