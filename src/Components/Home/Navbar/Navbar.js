import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
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
              <a class="nav-link" href="#footer">
                About Us
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#service">
                Services
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link" to="/sideBar">
                Admin
              </Link>
            </li>

            {!user.email && (
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            )}
            {user.email && (
              <Link className="nav-link active" to="/profile">
                {user.name}
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
