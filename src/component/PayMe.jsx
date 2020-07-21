import React from "react";


function PayMe() {
    return(
<div className="blankpage" id="payme">
  <h2>
  Make your payment
  </h2>


    <div className="closeMe" onClick={()=>{document.getElementById('payme').style.display = 'none'}}>
      Close Me
    </div>

</div>
    );
}

export default PayMe;