import React from "react";
import Facebook from "../../Images/facebook.png";
import Instagram from "../../Images/instagram.png";
import Linkedin from "../../Images/linkedin.png";
import Youtube from "../../Images/youtube.png";
import './Footer.css'


const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#DAF5FF" }} id="footer">
      <div className="row p-5 mt-5">
        <div className="col-md-4 offset-md-1">
          <h1>D__ExPrEsS</h1>
          <h6>Dhanmondi, Dhaka-1209</h6>
          <h6>D__ExPrEsS@gmail.com</h6>
          <h6>+880-171-0070075</h6>
        </div>
        <div className="col-md-3">
          <ul>
            <li>About us</li>
            <li>Success</li>
            <li>Refund policy</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="d-flex">
           <img className="img-fluid social-icon" src={Facebook} alt=""/>
           <img className="img-fluid social-icon" src={Instagram} alt=""/>
           <img className="img-fluid social-icon" src={Linkedin} alt=""/>
           <img className="img-fluid social-icon" src={Youtube} alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          Pay with
          <ul>
            <li>Cash on delivery</li>
            <li>BKash</li>
            <li>Nagad</li>
          </ul>
        </div>
      </div>
      <h5 className="text-center">Copyright 2020 D__ExPrEsS.com</h5>
    </footer>
  );
};

export default Footer;
