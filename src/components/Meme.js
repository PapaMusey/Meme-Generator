import React from "react";

export default function Meme() {
    function handleClick() {
        console.log("I was clicked")
    }
    function handleOnMouseOver() {
        console.log("I am here")
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
                            onClick={handleClick}
                            onMouseOver={handleOnMouseOver}
                            className="form-button">
                                Get a new meme image
                        </button>
                    </div>
                </div>

            </form>


        </main>
    )
}