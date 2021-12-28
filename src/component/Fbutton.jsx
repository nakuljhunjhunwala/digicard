/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

import React from "react";

function Fbutton({ logo, onclick }) {
  var url = onclick ? onclick : "#";

  const follow = {
    facebook: "fab fa-facebook-f",
    twitter: "fab fa-twitter",
    insta: "fab fa-instagram",
    youtube: "fab fa-youtube",
    quora: "fab fa-quora",
    github: "fab fa-github",
  };

  return (
    <div
      className="fbutton-box"
      onClick={() => {
        eval(onclick);
      }}
    >
      <div className="fbutton">
        <i className={eval(logo)}></i>
      </div>
    </div>
  );
}

export default Fbutton;
