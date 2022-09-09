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
// Complex State Array
// 복잡한 상태 배열

// function App() {
//     /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      * 
//      * * 과제: 지역 변수 대신 상태에 보관된 배열을 사용하도록 아래 코드를 변환하십시오. 아래의 동일한 2개 항목으로 상태 배열을 초기화합니다.
//       *
//       * 아직 `addItem`을 수정하는 것에 대해 걱정하지 마십시오.
//      */
//     // const thingsArray = ["Thing 1", "Thing 2"]
//     const [state, setState] = React.useState(["Thing 1", "Thing 2"])

//     function addItem() {
//         // We'll work on this next
//         // const newThingText = `Thing ${thingsArray.length + 1}`
//         // thingsArray.push(newThingText)
//         // document.getElementById()
//         // console.log(thingsArray)
//         setState(e => [...e, `Thing ${e.length + 1}`])
//     }

//     const thingsElements = state.map(thing => <p key={thing}>{thing}</p>)

//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }