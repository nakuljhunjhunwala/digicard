import React from 'react';
import Cbutton from "./component/Cbutton"
import Fbutton from "./component/Fbutton"
import Footer from "./component/Footer"
import ProfileBox from "./component/ProfileBox"
import Preloader from "./component/Preloader"


function App() {


  function preloader(){
    document.getElementById("preloader").style.display = "none";
 }

 window.onload = preloader;

  return ( 
<div className = "App" >

<Preloader></Preloader>


  <div className = "digicard">
  <div className = "pback"></div> 
    <div className = "details" >
      <ProfileBox 
        name="Nakul Jhunjhunwala"
        profession="Web Developer"
        logo="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/75296733_441851223392219_5753152136586199040_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=t5dPmS8B510AX9iMo4t&oh=b99f236f1d08014f76ef6570a261d06b&oe=5F3987C4"
      ></ProfileBox>

      <div className="info">

        <p className="titles">Contact :-</p>
          <div className="info-container">
            <Cbutton 
            logo="contact.phone" 
            text="Call Me"
            onclick="window.open('tel:8856020006' , '_self')"></Cbutton>
            <Cbutton 
            logo="contact.mail" 
            text="Email Me"
            onclick="window.open('mailto:jhunjhunwalanakul@gmail.com','_self')"></Cbutton>
            <Cbutton 
            logo="contact.whatsapp" 
            text="Whatsapp"></Cbutton>
            <Cbutton 
            logo="contact.skype" 
            text="Skype"></Cbutton>
            <Cbutton 
            logo="contact.messenger" 
            text="FB Chat"></Cbutton>
            <Cbutton 
            logo="contact.saveMe" 
            text="Save Me"></Cbutton>
            <Cbutton 
            logo="contact.payMe" 
            text="Pay Me"></Cbutton>
          </div>

        <p className="titles">Profile :-</p>
          <div className="info-container">
           <Cbutton 
           logo="profile.aboutMe" 
           text="About"></Cbutton>
           <Cbutton 
           logo="profile.experience" 
           text="Experience"></Cbutton>
           <Cbutton 
           logo="profile.share" 
           text="Share Me"></Cbutton>
          </div>

        <p className="titles">Company :-</p>
          <div className="info-container">
            <Cbutton 
            logo="company.address" 
            text="Address"></Cbutton>
            <Cbutton 
            logo="company.website" 
            text="Website"></Cbutton>
          </div>

        <p className="titles">Follow :-</p>
          <div className="info-container">
            <Fbutton 
              logo="follow.facebook">
            </Fbutton>
            <Fbutton 
              logo="follow.twitter">
            </Fbutton>
            <Fbutton 
              logo="follow.youtube">
            </Fbutton>
            <Fbutton 
              logo="follow.insta">
            </Fbutton>
            <Fbutton 
              logo="follow.quora">
            </Fbutton>
          </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;