import React from "react";
import SideBar from "../../SideBar/SideBar";

const BookingList = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow mt-5">
        <form onSubmit={handleSubmit}>
          <h3>R</h3>
          <hr />
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">
              Address
            </label>
            <textarea
              onBlur={handleOnBlur}
              class="form-control"
              id="address"
              name="address"
              placeholder="Your address"
              required
            />
          </div>
          <div class="mb-3">
            <label for="review" class="form-label">
              Review
            </label>
            <textarea
              onBlur={handleOnBlur}
              class="form-control"
              id="review"
              name="review"
              placeholder="Your review"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingList;
