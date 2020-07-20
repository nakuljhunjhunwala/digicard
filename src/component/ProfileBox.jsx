import React from "react"

function ProfileBox({logo,name,profession}) {
    

    return(
        <center >
    <div className = "profile-box" >
    <div className = "container" >
      <div className = "profile"
      style = {
        {
          backgroundImage: `url(${logo})`
        }
      } 
      >

      </div>

      <h1> {name} </h1> <p> {profession} </p> 
    </div>

    </div> 
    </center> 
    )
}

export default ProfileBox