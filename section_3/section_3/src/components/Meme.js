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
// Challenge: flipping State back and forth
// 과제: 상태를 앞뒤로 뒤집기

// export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     * 
     * - 'isGoingOut'의 상태를 부울로 초기화
     * - div.state--value를 클릭하면 해당 부울 값이 뒤집힙니다(true -> false, false -> true).
     * - `isGoingOut`이 `true`이면 "Yes"를 표시하고, 그렇지 않으면 "No"를 표시합니다.
     */
    
// ref [use callback] - cuz we use previous state
//     const [isGoingOut, setIsGoingOut] = React.useState(true);
    
//     const click = ()=>{
//         setIsGoingOut(e=>!e)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value" onClick={click}>
//                 <h1>{isGoingOut?"Yes":"No"}</h1>
//             </div>
//         </div>
//     )
// }

// 처음 푼 코드
//     const [isGoingOut, setIsGoingOut] = React.useState(true);
//     const [yes, setYes] = React.useState('Yes');
    
//     const click = ()=>{
//         isGoingOut ? setIsGoingOut(false) : setIsGoingOut(true)
//         isGoingOut ? setYes('Yes') : setYes('No')
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value" onClick={click}>
//                 <h1>{yes}</h1>
//             </div>
//         </div>
//     )

// 번뜩 떠오른 코드
// const [isGoingOut, setIsGoingOut] = React.useState(true);

// const click = ()=>{
//     isGoingOut ? setIsGoingOut(false) : setIsGoingOut(true)
// }

// return (
//     <div className="state">
//         <h1 className="state--title">Do I feel like going out tonight?</h1>
//         <div className="state--value" onClick={click}>
//             <h1>{isGoingOut?"Yes":"No"}</h1>
//         </div>
//     </div>
// )