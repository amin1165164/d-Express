import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand ms-4" href="/">
          D__ExPrEsS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="/">
                About Us
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="/">
                Services
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
