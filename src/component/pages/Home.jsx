import React, { useEffect } from "react";
import Preloader from "../Preloader";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

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

      <div className="digicard">
        <div className="homepage_header">
          <h2>
            <span>Hi, I'm</span>
            <br />
            <span>Nakul Jhunjhunwala,</span>
            <br />
            <span>creator of this digital card.</span>
          </h2>
          <h4>
            <span>
              Lets Cut to the chase and get started with your digital card
            </span>
          </h4>
        </div>
        <div className="homepage_body">
          <button
            className="homepage_button"
            onClick={() => {
              history.push("/create");
            }}
          >
            <span>Get Started</span>
          </button>
          <button
            className="homepage_button"
            onClick={() => {
              history.push("/owner");
            }}
          >
            <span>Owner Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
