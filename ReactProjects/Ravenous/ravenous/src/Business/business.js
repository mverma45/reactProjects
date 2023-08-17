import React from "react";
import "../App.js"

/* Components should display an image, name, address, city, state, zipcode, category, rating, 
and review count.
*/

function Heading(){
    return (
        <div className="Heading">
        <header className="Heading-header">
    <p>I am an image Component</p>
     <a
          className="Heading-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2.0
        </a>
    </header>
    </div>
    )
}

export default Heading;