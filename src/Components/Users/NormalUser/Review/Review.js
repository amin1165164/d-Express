import React, { useState } from "react";
import { useHistory } from "react-router";
import SideBar from "../../SideBar/SideBar";

const Review = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [review, setReview] = useState({});
  const history = useHistory();
  const handleOnBlur = (e) => {
    const newReview = review;
    newReview[e.target.name] = e.target.value;
    newReview.image = user.img;
    setReview(newReview);
  };
  const handleSubmit = (e) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Review is successfully added");

        history.replace("/review");
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow mt-5">
        <form onSubmit={handleSubmit}>
          <h3>Review</h3>
          <hr />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              onBlur={handleOnBlur}
              className="form-control"
              id="address"
              name="address"
              placeholder="Your address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="review" className="form-label">
              Review
            </label>
            <textarea
              onBlur={handleOnBlur}
              className="form-control"
              id="review"
              name="review"
              placeholder="Your review"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
