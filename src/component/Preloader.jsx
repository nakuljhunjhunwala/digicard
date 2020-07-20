import React from "react"
import loaderCard from "../images/card.svg"


function Preloader() {

    return(
        <div className="preloader" id="preloader">
<img src={loaderCard} alt="Card"></img>
</div>
    )
}

export default Preloader;