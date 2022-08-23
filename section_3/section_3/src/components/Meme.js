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

    // 3. Build a Meme Generator
    // Our current conundrum / 우리의 현재 수수께끼
    const [thing, setThing] = React.useState(["thing1", "thing2"]);

    function addThing() {
        const newThing = `thing ${thing.length + 1}`
        setThing(prevState => [...prevState, newThing])
    }

    const thingEl = thing.map(el => {
        return (
            <p key={el}>{el}</p>
        )
    })

    return (
        <main>
            <div className="event-container">
                <img src="https://pbs.twimg.com/media/FawoAzxVUAA7myJ?format=jpg&name=large" alt="kang" onMouseOver={handleMouseOver} />
                <button onClick={addThing}>click me!</button>
                {thingEl}
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