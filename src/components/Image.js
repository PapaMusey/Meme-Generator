import React from "react";

export default function Image() {
    function handleOnMouseOver() {
      console.log("I am here");
    }
  
    return (
      <div className="image-container" style={{ textAlign: "center", paddingTop: "50px" }}>
        <img
        onMouseOver={handleOnMouseOver}
        src="/img/mrdynamic.png"
        alt="generated meme"
        className="meme-image"
        style={{ width: "300px", height: "auto" }}
      />
      </div>
  
    )
}

