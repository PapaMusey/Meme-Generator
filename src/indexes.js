import React from "react";
import ReactDOM from "react-dom";

function App () {
    const thingsArray = ["Thing 1", "Thing 2"]
    const newthingsArray = thingsArray.map(thing => <p key={thing} >Show {thing} </p>)  


    return(
        <div>
            <button>Add Item</button>
            
          
        </div>
    )
}