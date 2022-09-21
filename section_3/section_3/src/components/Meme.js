import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: url
        }))
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
                <img src={meme.randomImage} alt='meme_image' />
            </div>
        </main>
    )
}