import React from "react";
import Cbutton from "../Cbutton"
import Fbutton from "../Fbutton"
import Footer from "../Footer"
import ProfileBox from "../ProfileBox"
import Preloader from "../Preloader"
import SaveContact from "../SaveContact"
import PayMe from "../PayMe"


function Kreativeevents() {


    function preloader(){
      document.getElementById("preloader").style.display = "none";
   }
  
   window.onload = preloader;
  
    return ( 
  <div className = "App" >
  
      <Preloader></Preloader>
      <SaveContact
        qrcode="https://www.vcard.link/card/D7nA.png"
        vcf="https://www.vcard.link/card/D7nA.vcf"
      ></SaveContact>
      <PayMe 
      gpay="8978675645"
      phonepe="9036020025"
      pytm="9036020025"
      upi="9036020025@ybl"
      ></PayMe>
  
    <div className = "digicard">
    <div className = "pback"></div> 
      <div className = "details" >
        <ProfileBox 
          name=" Kreative Event Management"
          profession="Ranjith Kunchum"
          logo="https://scontent.fbom12-1.fna.fbcdn.net/v/t1.0-9/107569666_115281330254227_3826448106762454794_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jYtoOtzjvc0AX-pH8K2&_nc_ht=scontent.fbom12-1.fna&oh=429b43f7e54b7a3e77e634e6af7d6b20&oe=5F3E4683"
        ></ProfileBox>
  
        <div className="info">
  
          <p className="titles">Contact :-</p>
            <div className="info-container">
              <Cbutton 
              logo="contact.phone" 
              text="Call Me"
              onclick="window.open('tel: 9036020025' , '_self')"></Cbutton>
              <Cbutton 
              logo="contact.mail" 
              text="Email Me"
              onclick="window.open('mailto:kreativeeventmanagement@gmail.com','_self')"></Cbutton>
              <Cbutton 
              logo="contact.whatsapp" 
              text="Whatsapp"
              onclick="window.open('https://wa.link/f4119n')"
              ></Cbutton>
              <Cbutton 
              logo="contact.messenger" 
              text="FB Chat"
              onclick="window.open('https://m.me/Kreative-Event-Management-115279716921055')"
              ></Cbutton>
              <Cbutton 
              logo="contact.saveMe" 
              text="Save Me"
              onclick="document.getElementById('addcontact').style.display = 'block';"></Cbutton>
              <Cbutton 
             logo="profile.share" 
             text="Share Me"
             onclick="window.open('https://api.whatsapp.com/send?text=Kreative+Event+Management+-+Event+Management%20-%20https%3A%2F%2Fdigicard.gq%2fkreativeevents')">

             </Cbutton>
              <Cbutton 
              logo="contact.payMe" 
              text="Pay Me"
              onclick="document.getElementById('payme').style.display = 'block';"
              ></Cbutton>
            </div>
  
          
  
          <p className="titles">Company :-</p>
            <div className="info-container">
              <Cbutton 
              logo="company.address" 
              text="Address"
              onclick="window.open('https://goo.gl/maps/T4FL9pW35CBeT4W17')"></Cbutton>
               <Cbutton 
              logo="company.address" 
              text="2nd Address"
              onclick="window.open('https://goo.gl/maps/iGLySAJ3Cp1vRjCZ6')"></Cbutton>
              <Cbutton 
              logo="company.website" 
              text="Website"
              onclick="window.open('http://www.kreativeevents.in')"></Cbutton>
            </div>
  
          <p className="titles">Follow :-</p>
            <div className="info-container">
              <Fbutton 
                logo="follow.facebook"
                onclick="window.open('https://www.facebook.com/Kreative-Event-Management-115279716921055')">
              </Fbutton>
              <Fbutton 
                logo="follow.insta"
                onclick="window.open('https://www.instagram.com/kreativeeventmanagement/')">
              </Fbutton>
            </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
    );
  }


export default Kreativeevents;

  