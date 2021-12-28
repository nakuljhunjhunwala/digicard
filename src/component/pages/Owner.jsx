import React, { useEffect } from "react";
import Cbutton from "../Cbutton";
import Fbutton from "../Fbutton";
import Footer from "../Footer";
import ProfileBox from "../ProfileBox";
import Preloader from "../Preloader";
import SaveContact from "../SaveContact";
import PayMe from "../PayMe";

function Owner() {
  useEffect(() => {
    setTimeout(() => {
      preloader();
    }, 2000);
  }, []);
  function preloader() {
    document.getElementById("preloader").style.display = "none";
  }

  return (
    <div className="App">
      <Preloader></Preloader>
      <SaveContact
        qrcode="https://www.vcard.link/card/D7cb.png"
        vcf="https://www.vcard.link/card/D7cb.vcf"
      ></SaveContact>
      <PayMe
        gpay="8856020006"
        phonepe="8856020006"
        pytm="8856020006"
        upi="8856020006@ybl"
      ></PayMe>

      <div className="digicard">
        <div className="pback"></div>
        <div className="details">
          <ProfileBox
            name="Nakul Jhunjhunwala"
            profession="Web Developer"
            logo="https://scontent.fnag8-1.fna.fbcdn.net/v/t39.30808-6/216567219_3045849355741206_7734272621270797606_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hSxm9tYI1rkAX886OFv&_nc_ht=scontent.fnag8-1.fna&oh=00_AT-49MpzFysw7TZZ-5EvxgeSDF2wyAdU8Uw2odQ0OBOa8w&oe=61CDEBE9"
          ></ProfileBox>

          <div className="info">
            <p className="titles">Contact :-</p>
            <div className="info-container">
              <Cbutton
                logo="contact.phone"
                text="Call Me"
                onclick="window.open('tel:8856020006' , '_self')"
              ></Cbutton>
              <Cbutton
                logo="contact.mail"
                text="Email Me"
                onclick="window.open('mailto:jhunjhunwalanakul@gmail.com','_self')"
              ></Cbutton>
              <Cbutton
                logo="contact.whatsapp"
                text="Whatsapp"
                onclick="window.open('https://wa.link/cikuz6')"
              ></Cbutton>
              <Cbutton
                logo="contact.skype"
                text="Skype"
                onclick="window.open('skype:live:jhunjhunwalanakul?chat','_self')"
              ></Cbutton>
              <Cbutton
                logo="contact.messenger"
                text="FB Chat"
                onclick="window.open('https://m.me/nakul.jhunjhunwala')"
              ></Cbutton>
              <Cbutton
                logo="contact.saveMe"
                text="Save Me"
                onclick="document.getElementById('addcontact').style.display = 'block';"
              ></Cbutton>
              <Cbutton
                logo="contact.payMe"
                text="Pay Me"
                onclick="document.getElementById('payme').style.display = 'block';"
              ></Cbutton>
            </div>

            <p className="titles">Profile :-</p>
            <div className="info-container">
              <Cbutton logo="profile.aboutMe" text="About"></Cbutton>
              <Cbutton logo="profile.experience" text="Experience"></Cbutton>
              <Cbutton
                logo="profile.share"
                text="Share Me"
                onclick="window.open('https://api.whatsapp.com/send?text=Nakul+Jhunjhunwala+-+Web+Developer%20-%20https%3A%2F%2Fdigicard,gq')"
              ></Cbutton>
            </div>

            <p className="titles">Company :-</p>
            <div className="info-container">
              <Cbutton
                logo="company.address"
                text="Address"
                onclick="window.open('https://goo.gl/maps/NxXr4EnNuuNNro1U7')"
              ></Cbutton>
              <Cbutton
                logo="company.website"
                text="Website"
                onclick="window.open('https://nakuljhunjhunwala.github.io/Portfolio/')"
              ></Cbutton>
            </div>

            <p className="titles">Follow :-</p>
            <div className="info-container">
              <Fbutton
                logo="follow.facebook"
                onclick="window.open('https://www.facebook.com/nakul.jhunjhunwala')"
              ></Fbutton>
              <Fbutton
                logo="follow.twitter"
                onclick="window.open('https://twitter.com/NakulJhunjhunw1')"
              ></Fbutton>
              <Fbutton logo="follow.youtube"></Fbutton>
              <Fbutton
                logo="follow.insta"
                onclick="window.open('https://www.instagram.com/nakuljhunjhunwala/')"
              ></Fbutton>
              <Fbutton
                logo="follow.quora"
                onclick="window.open('https://www.quora.com/profile/Nakul-Jhunjhunwala')"
              ></Fbutton>
              <Fbutton
                logo="follow.github"
                onclick="window.open('https://github.com/nakuljhunjhunwala')"
              ></Fbutton>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
