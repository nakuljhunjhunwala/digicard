/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

import React from 'react';

function Fbutton({logo,onclick}) {

    var url = onclick ? onclick : "#";

const follow ={
    facebook: "fas fa-phone-alt",
    twitter: "fas fa-envelope",
    insta: "fab fa-whatsapp",
    youtube: "fab fa-skype",
    quora: "fab fa-facebook-messenger",
}


    return(
        <div className="fbutton-box" onClick={()=>{
            eval(onclick)
        }}>
      <div className="fbutton">
      
      <i className={eval(logo)}></i>
      </div>
      </div>

    )
    
}

export default Fbutton;