import React from "react";
import Cbutton from "../Cbutton"
import Fbutton from "../Fbutton"
import Footer from "../Footer"
import ProfileBox from "../ProfileBox"
import Preloader from "../Preloader"
import SaveContact from "../SaveContact"
import PayMe from "../PayMe"




function Sample() {


    function preloader(){
      document.getElementById("preloader").style.display = "none";
   }
  
   window.onload = preloader;
  
    return ( 
  <div className = "App" >
  
      <Preloader></Preloader>
      <SaveContact
        qrcode="https://www.vcard.link/card/D7cb.png"
        vcf="https://www.vcard.link/card/D7cb.vcf"
      ></SaveContact>
      <PayMe></PayMe>
  
    <div className = "digicard">
    <div className = "pback"></div> 
      <div className = "details" >
        <ProfileBox 
          name="Nakul Jhunjhunwala"
          profession="Web Developer"
          logo="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/75296733_441851223392219_5753152136586199040_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=t5dPmS8B510AX9iMo4t&oh=b99f236f1d08014f76ef6570a261d06b&oe=5F3987C4"
        ></ProfileBox>
  
        <div className="info">
  
        <div className="info-container normal-container">
  
          <div className="inline" onClick={()=>{window.open('tel:8856020006' , '_self')}}>
            <Cbutton logo="contact.phone" ></Cbutton>
            <p className="s2">8856020006</p>
          </div>
            <p>&nbsp; &nbsp; &nbsp; &nbsp;</p>  
  
          <div className="inline" onClick={()=>{window.open('tel:9834077320' , '_self')}}>
            <Cbutton logo="contact.phone" ></Cbutton>
            <p className="s2">9834077320</p>
          </div>
  
          <div className="inline" onClick={()=>{window.open('mailto:jhunjhunwalanakul@gmail.com' , '_self')}}>
            <Cbutton logo="contact.mail" ></Cbutton>
            <p className="s2">jhunjhunwalanakul@gmail.com</p>
          </div>
  
          <div className="inline" onClick={()=>{window.open('https://nakuljhunjhunwala.github.io/Portfolio/')}}>
            <Cbutton logo="company.website" ></Cbutton>
            <p className="s2">https://nakuljhunjhunwala.github.io/Portfolio/</p>
          </div>
  
          <div className="inline" onClick={()=>{window.open('https://wa.link/cikuz6')}}>
            <Cbutton logo="contact.whatsapp" ></Cbutton>
            <p className="s2">Chat on Whatsapp</p>
          </div>
  
  
          <div className="inline" onClick={()=>{window.open('https://www.vcard.link/card/D7cb.vcf' , '_self')}}>
            <Cbutton logo="contact.saveMe" ></Cbutton>
            <p className="s2">Save to PhoneBook</p>
          </div>
  
  
          <div className="inline" onClick={()=>{window.open('https://goo.gl/maps/NxXr4EnNuuNNro1U7' , '_self')}}>
            <Cbutton logo="company.address" ></Cbutton>
            <p className="s2">SS5 Mansarovar ,Bhiwandi- 421302</p>
          </div>
  
  
        </div>
  
        <div className="info-container">
        <p className="titles " style={{textAlign: "left"}}>Follow me on:-</p>
              <Fbutton 
                logo="follow.facebook"
                onclick="window.open('https://www.facebook.com/nakul.jhunjhunwala')">
              </Fbutton>
              <Fbutton 
                logo="follow.twitter"
                onclick="window.open('https://twitter.com/NakulJhunjhunw1')">
              </Fbutton>
              <Fbutton 
                logo="follow.youtube">
              </Fbutton>
              <Fbutton 
                logo="follow.insta"
                onclick="window.open('https://www.instagram.com/nakuljhunjhunwala/')">
              </Fbutton>
              <Fbutton 
                logo="follow.quora"
                onclick="window.open('https://www.quora.com/profile/Nakul-Jhunjhunwala')">
              </Fbutton>
            </div>
          
  
            <Footer></Footer>
        </div>
  
        
      </div>
      
    </div>
  </div>
    );
  }
  

  

  export default Sample;