import React from "react";
import DeliveryOffer from "../../Images/delivery_offer-removebg-preview.png"

const Offer = () => {
  return (
    <section className="container mt-5 " style={{height: '400px'}}>
      <div className="text-center">
        <h1>Exclusive Offer</h1>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img className="img-fluid"src={DeliveryOffer} alt="" />
        </div>
        <div className="col-md-6">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Serial No.</th>
                <th scope="col">Offer Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Daily</td>
                <td>5</td>
                <td>10%</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Weekly</td>
                <td>32</td>
                <td>15%</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Monthly</td>
                <td>950</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Offer;
