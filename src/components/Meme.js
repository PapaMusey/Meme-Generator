import React from "react";
import memesData from "../components/memesData.json"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("http://imgur.com/vTSZ6CG.png")
    const[meme, setMeme] = React.useState({
        topText: "" ,
        bottomText: "",
        randomImage: "http://imgur.com/t9uwvai.png",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData) 


    function getMemeImage(event) {
        event.preventDefault();
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // console.log(memesArray[randomNumber])
        const image = memesArray[randomNumber].image
        // console.log(image)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: image
        }))
    }


    return (
        <main>

            <form className="form">
                <div>
                    <div className="formwrapper">
                        <div>
                            <input
                                className="form-input" type="text" placeholder="Top text" />
                        </div>
                        <div>
                            <input
                                className="form-input" type="text" placeholder="Bottom text" />
                        </div>
                    </div>
                    <div className="button">
                        <button
                            onClick={getMemeImage}                          
                            className="form-button">
                                Get a new meme image
                        </button>
                    </div>
                </div>
            </form>
            <div className="meme-image">
            <img
            src={meme.randomImage}
            alt="generated meme"
            className="meme-image"
            />
            </div>
            

        </main>
    )
}