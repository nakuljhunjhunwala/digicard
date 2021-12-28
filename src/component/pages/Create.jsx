import React, { useState, useEffect } from "react";
import Preloader from "../Preloader";
import axios from "axios";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Create() {
  let history = useHistory();
  const errorToast = (msg) =>
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });
  const successToast = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const [details, setdetails] = useState({});
  useEffect(() => {
    setTimeout(() => {
      preloader();
    }, 2000);
  }, []);
  function preloader() {
    document.getElementById("preloader").style.display = "none";
  }

  let saveDetails = () => {
    if (details.username && details.name && details.profession) {
      document.getElementById("preloader").style.display = "block";
      axios
        .post("https://digicardnakul.herokuapp.com/digicard", details)
        .then((res) => {
          document.getElementById("preloader").style.display = "none";
          console.log(res);
          let { username } = details;
          setdetails({});
          successToast("Your profile has been created successfully");
          setTimeout(() => {
            history.push("/public/" + username);
          }, 3000);
        })
        .catch((err) => {
          document.getElementById("preloader").style.display = "none";
          errorToast(err.response.data.message);
          console.log(err);
        });
    } else {
      alert(
        `Please fill ${
          !details.username ? "username" : !details.name ? "name" : "profession"
        }`
      );
    }
  };

  return (
    <div className="App">
      <Preloader></Preloader>
      <div className="digicard">
        <div className="create-header">
          <center>
            <h2>Lets get Started</h2>
          </center>
        </div>
        <div className="create-body">
          <div className="create-body-form">
            <div className="create-body-form-box">
              <center>
                <div className="username_div">
                  digicard.netlify.com/public/
                  <input
                    className="usernameInput"
                    type="text"
                    value={details.username || ""}
                    placeholder="username"
                    onChange={(e) => {
                      setdetails({
                        ...details,
                        username: e.target.value
                          .replace(/[^a-zA-Z ]/g, "")
                          .trim(),
                      });
                    }}
                  />
                </div>
              </center>
              <p className="titles">My Details :-</p>
              <div className="form-input">
                <p>Name * </p>
                <input
                  required
                  type="text"
                  value={details.name || ""}
                  placeholder="Enter your Full name"
                  onChange={(e) => {
                    setdetails({ ...details, name: e.target.value });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Profession * </p>
                <input
                  type="text"
                  value={details.profession || ""}
                  placeholder="Enter your Profession"
                  onChange={(e) => {
                    setdetails({ ...details, profession: e.target.value });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Profile Photo Link </p>
                <input
                  type="text"
                  value={details.profilePhoto || ""}
                  placeholder="Insert photo link if any"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      profilePhoto: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>
              <p className="titles">Contact :-</p>
              <div className="form-input">
                <p>Contact Number </p>
                <input
                  type="number"
                  value={details.phoneNumber || ""}
                  placeholder="Enter your Contact Number"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      phoneNumber: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Email </p>
                <input
                  type="email"
                  value={details.email || ""}
                  placeholder="Enter your Email Address"
                  onChange={(e) => {
                    setdetails({ ...details, email: e.target.value.trim() });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Whatsapp Number </p>
                <input
                  type="number"
                  value={details.whatsappNumber || ""}
                  placeholder="Enter your Whatsapp Number"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      whatsappNumber: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Skype Id </p>
                <input
                  type="text"
                  value={details.skypeId || ""}
                  placeholder="Example: jhunjhunwalanakul"
                  onChange={(e) => {
                    setdetails({ ...details, skypeId: e.target.value.trim() });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Messenger Id </p>
                <input
                  type="text"
                  value={details.messengerId || ""}
                  placeholder="Example: nakul.jhunjhunwala"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      messengerId: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Share Link </p>
                <input
                  type="text"
                  value={details.shareableLink || ""}
                  placeholder="Enter a link to share site if any"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      shareableLink: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>
              <p className="titles">Personal Detail :-</p>
              <div className="form-input">
                <p>GMap Address</p>
                <input
                  type="text"
                  value={details.address || ""}
                  placeholder="Example: https://goo.gl/maps/NxXr4EnNuuNNro1U7"
                  onChange={(e) => {
                    setdetails({ ...details, address: e.target.value.trim() });
                  }}
                ></input>
              </div>
              <div className="form-input">
                <p>Website</p>
                <input
                  type="text"
                  value={details.website || ""}
                  placeholder="Insert the link to website if any"
                  onChange={(e) => {
                    setdetails({ ...details, website: e.target.value.trim() });
                  }}
                ></input>
              </div>
              <p className="titles">Follow :-</p>

              <div className="form-input">
                <p>Facebook Id</p>
                <input
                  type="text"
                  value={details.facebookId || ""}
                  placeholder="Example: nakul.jhunjhunwala"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      facebookId: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>

              <div className="form-input">
                <p>Twiter Id</p>
                <input
                  type="text"
                  value={details.twitterId || ""}
                  placeholder="Example: NakulJhunjhunw1"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      twitterId: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>

              <div className="form-input">
                <p>Instagram Id</p>
                <input
                  type="text"
                  value={details.instagramId || ""}
                  placeholder="Example: nakuljhunjhunwala"
                  onChange={(e) => {
                    setdetails({
                      ...details,
                      instagramId: e.target.value.trim(),
                    });
                  }}
                ></input>
              </div>

              <div className="form-input">
                <p>Quora Id</p>
                <input
                  type="text"
                  value={details.quoraId || ""}
                  placeholder="Example: Nakul-Jhunjhunwala"
                  onChange={(e) => {
                    setdetails({ ...details, quoraId: e.target.value.trim() });
                  }}
                ></input>
              </div>

              <div className="form-input">
                <p>Github Id</p>
                <input
                  type="text"
                  value={details.githubId || ""}
                  placeholder="Example: nakuljhunjhunwala"
                  onChange={(e) => {
                    setdetails({ ...details, githubId: e.target.value.trim() });
                  }}
                ></input>
              </div>
              {/* save and clear button */}
              <br></br>
              <div className="form_button">
                <button
                  onClick={() => {
                    saveDetails();
                  }}
                >
                  Save
                </button>
                &nbsp; &nbsp;
                <button
                  onClick={() => {
                    setdetails({});
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Create;
