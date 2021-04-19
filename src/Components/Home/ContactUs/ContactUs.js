import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="container">
      <h1 className="my-4 text-center">CONTACT with US</h1>
      <form className="border p-5 m-5 shadow rounded form-background ">
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address "
          />
        </div>
        <div className="mb-3">
          <label for="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            placeholder="Enter your mobile number "
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Your Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Write your message"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
