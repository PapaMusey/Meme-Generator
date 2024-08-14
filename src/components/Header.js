import React from "react-dom";

export default function Header (){

    return (
        <header className="header">
            <div className="logo-and-name">
            <img src="/img/TrollFace.png" alt="Troll" className="headerimage"/>
            <h2 className="headertitle"> Meme Generator </h2> 
            </div>
           
            <div>
            <p className="headerproject">React Course - Project 3</p>
            </div>
        </header>
    )
}