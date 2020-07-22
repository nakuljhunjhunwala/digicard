import React from "react";


function SaveContact({qrcode,vcf}) {
    return(
<div className="blankpage" id="addcontact">
  <h2>
  Save to Phone Book
  </h2>

<div className="b-container">
    <h4>Save my Contact Information in your phone book</h4>
    <img src={qrcode} alt="Qr Code"></img>
    <div>
      <p>Scan above QR Code OR</p>
      <p><b>Step : 1 -</b> Download this <a href={vcf}>VCF File</a></p>
      <p><b>Step : 2 -</b> Open the VCF File</p>
      <p><b>Step : 3 -</b> Save To Contacts</p>
    </div>

    <div className="closeMe" onClick={()=>{document.getElementById('addcontact').style.display = 'none'}}>
      Close Me
    </div>
</div>

</div>
    );
}

export default SaveContact;