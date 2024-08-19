import React from "react";
import memesData from "../components/memesData.json"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")


    function getMemeImage(event) {
        event.preventDefault();
        const memesArray = memesData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // console.log(memesArray[randomNumber])
        const image = memesArray[randomNumber].image
        // console.log(image)
        setMemeImage(image)

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
            src={memeImage}
            alt="generated meme"
            className="meme-image"
            />
            </div>
            

        </main>
    )
}