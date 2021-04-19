import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SideBar from "../../SideBar/SideBar";

const BookService = () => {
  const {id} = useParams();
  const [serviceType, setServiceType] = useState([]);
  const {price, type} = serviceType;

  
  useEffect(()=>{
    fetch(`http://localhost:5000/service/${id}`)
    .then(response => response.json())
    .then(data => {
      setServiceType(data)

    })
  }, [])
  
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { name, email } = user;
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow mt-5">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder={name}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              placeholder={email}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="type"
              name="type"
              placeholder={type}
              required
            />
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="pay"
              checked
            />
            <label class="form-check-label" for="pay">
              Pay with Credit Card
            </label>
          </div>
          <div>
              <h5>Your service charge is {price}</h5>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
