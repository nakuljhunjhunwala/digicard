import React from "react"

function ProfileBox({logo,name,profession,owner}) {
    

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

    <h1> {name} </h1> <p> {profession} </p> {owner && <p>{owner}</p>}
    </div>

    </div> 
    </center> 
    )
}

export default ProfileBox