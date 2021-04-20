import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import SideBar from "../../SideBar/SideBar";

const BookService = () => {
  const { id } = useParams();
  const [serviceType, setServiceType] = useState([]);
  const { price, type } = serviceType;
  const [serviceBook, setServiceBook] = useState({});
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { name, email } = user;

  console.log(serviceBook);

  const history = useHistory();

  useEffect(() => {
    fetch(`https://intense-bayou-17126.herokuapp.com/service/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setServiceType(data);
      });
  }, [id]);

  const handleOnBlur = (e) => {
    const newServiceBook = serviceBook;
    newServiceBook[e.target.name] = e.target.value;
    newServiceBook.name = name;
    newServiceBook.email = email;
    newServiceBook.type = type;
    newServiceBook.price = price;

    setServiceBook(newServiceBook);
  };

  const handleOnchange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://intense-bayou-17126.herokuapp.com/serviceBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceBook),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your service is successfully booked");

        history.replace("/");
      });
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={type}
              required
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              type="text"
              className="form-control"
              id="details"
              name="details"
              placeholder="Your product details"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              type="text"
              className="form-control"
              id="Address"
              name="Address"
              placeholder="Your Address"
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              type="text"
              className="form-control"
              id="number"
              name="number"
              placeholder="Your Number"
              required
            />
          </div>
          
          <div>
            <h5>Your service charge is {price}</h5>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
