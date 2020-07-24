import React from "react";


function PayMe({gpay,phonepe,pytm,upi}) {
    return(
<div className="blankpage" id="payme">
  <h2>
  Make your payment
  </h2>



  <div className="b-container">
    <h4>Payment Methods</h4>
    <br></br>
    <div>
    {gpay && <p><b>Google Pay:-</b>{gpay}</p>}
    {phonepe && <p><b>Phonepe:-</b>{phonepe}</p>}
    {pytm && <p><b>Paytm:-</b>{pytm}</p>}
    {upi && <p><b>UPI Id:-</b>{upi}</p>}
    </div>

    
    <div className="closeMe" onClick={()=>{document.getElementById('payme').style.display = 'none'}}>
      Close Me
    </div>

</div>


</div>
    );
}

export default PayMe;