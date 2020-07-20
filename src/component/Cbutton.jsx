/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */


import React from 'react';

function Cbutton({logo, text, onclick}) {
    var url = onclick ? onclick : "#"; 

const contact ={
    phone: "fas fa-phone-alt",
    mail: "fas fa-envelope",
    whatsapp: "fab fa-whatsapp",
    skype: "fab fa-skype",
    messenger: "fab fa-facebook-messenger",
    saveMe: "fas fa-user-plus",
    payMe: "far fa-credit-card",
}


const profile = {
    aboutMe: "fas fa-user",
    experience: "fas fa-briefcase",
    share: "fas fa-share-alt",
}

const company = {
    address: "fas fa-map-marker-alt",
    website: "fas fa-globe",
}



    return(
        <div className="button-box" onClick={()=>{
            window.open(url,"_blank");
        }} >
      <div className="button">
      
      <i className={eval(logo)}></i>
      </div>
    <p>{text}</p>
      </div>

    )
    
}

export default Cbutton;