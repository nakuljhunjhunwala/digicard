import React, { useState, useEffect } from "react";
import Cbutton from "../Cbutton";
import Fbutton from "../Fbutton";
import Footer from "../Footer";
import ProfileBox from "../ProfileBox";
import Preloader from "../Preloader";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

// import details from "../../database";

function Public() {
  const [details, setdetails] = useState(null);
  let { username } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`https://digicardnakul.herokuapp.com/digicard/${username}`)
      .then((res) => {
        setdetails(res.data);
        preloader();
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      });
  }, [history, username]);

  function preloader() {
    document.getElementById("preloader").style.display = "none";
  }
  // window.onload = preloader;

  return (
    <>
      {details ? (
        <div className="App">
          <Preloader></Preloader>
          <div className="digicard">
            <div className="pback"></div>
            <div className="details">
              <ProfileBox
                name={details.name}
                profession={details.profession}
                logo={
                  details.profilePhoto ||
                  `https://ui-avatars.com/api/?name=${
                    details.name.split(" ")[0]
                  }&length=1&rounded=true&background=09B4CB&color=fff`
                }
              ></ProfileBox>

              <div className="info">
                <p className="titles">Contact :-</p>
                <div className="info-container">
                  {details.phoneNumber && (
                    <Cbutton
                      logo="contact.phone"
                      text="Call Me"
                      onclick={`window.open('tel:${details.phoneNumber}' , '_self')`}
                    ></Cbutton>
                  )}
                  {details.email && (
                    <Cbutton
                      logo="contact.mail"
                      text="Email Me"
                      onclick={`window.open('mailto:${details.email}','_self')`}
                    ></Cbutton>
                  )}
                  {details.whatsappNumber && (
                    <Cbutton
                      logo="contact.whatsapp"
                      text="Whatsapp"
                      onclick={`window.open('https://wa.me/+91${details.whatsappNumber}')`}
                    ></Cbutton>
                  )}
                  {details.skypeId && (
                    <Cbutton
                      logo="contact.skype"
                      text="Skype"
                      onclick={`window.open('skype:live:${details.skypeId}?chat','_self')`}
                    ></Cbutton>
                  )}
                  {details.messengerId && (
                    <Cbutton
                      logo="contact.messenger"
                      text="Messenger"
                      onclick={`window.open('https://m.me/${details.messengerId}')`}
                    ></Cbutton>
                  )}
                  {details.shareableLink && (
                    <Cbutton
                      logo="profile.share"
                      text="Share Me"
                      onclick={`window.open('${details.shareableLink}')`}
                    ></Cbutton>
                  )}
                </div>

                <p className="titles">Personal Detail :-</p>
                <div className="info-container">
                  {details.address && (
                    <Cbutton
                      logo="company.address"
                      text="Address"
                      onclick={`window.open('${details.address}')`}
                    ></Cbutton>
                  )}
                  {details.website && (
                    <Cbutton
                      logo="company.website"
                      text="Website"
                      onclick={`window.open('${details.website}')`}
                    ></Cbutton>
                  )}
                </div>

                <p className="titles">Follow :-</p>
                <div className="info-container">
                  {details.facebookId && (
                    <Fbutton
                      logo="follow.facebook"
                      onclick={`window.open('https://www.facebook.com/${details.facebookId}')`}
                    ></Fbutton>
                  )}
                  {details.twitterId && (
                    <Fbutton
                      logo="follow.twitter"
                      onclick={`window.open('https://twitter.com/${details.twitterId}')`}
                    ></Fbutton>
                  )}
                  {/* <Fbutton logo="follow.youtube"></Fbutton> */}
                  {details.instagramId && (
                    <Fbutton
                      logo="follow.insta"
                      onclick={`window.open('https://www.instagram.com/${details.instagramId}')`}
                    ></Fbutton>
                  )}
                  {details.quoraId && (
                    <Fbutton
                      logo="follow.quora"
                      onclick={`window.open('https://www.quora.com/profile/${details.quoraId}')`}
                    ></Fbutton>
                  )}
                  {details.githubId && (
                    <Fbutton
                      logo="follow.github"
                      onclick={`window.open('https://github.com/${details.githubId}')"`}
                    ></Fbutton>
                  )}
                </div>
                <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Preloader></Preloader>
      )}
    </>
  );
}

export default Public;
