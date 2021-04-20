import React from "react";
import HeaderImage from "../../Images/headerImage-removebg-preview.png";

const HeaderMain = () => {
  return (
    <main className="container">
      <div
        style={{ height: "500px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-5">
          <h1>
            We Delivery <br />
            Your Product
          </h1>
          <p className="my-3">
            Online delivery system. We collect your product from your door and
            delivery to the requested customer.
          </p>
          <a href="#service">
            <button className="btn btn-primary">GET SERVICES</button>
          </a>
        </div>
        <div className="col-md-7">
          <img className="img-fluid" src={HeaderImage} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
