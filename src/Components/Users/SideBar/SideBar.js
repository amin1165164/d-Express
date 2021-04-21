import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faSignOutAlt,
  faPlusCircle,
  faList,
  faUserPlus,
  faEdit,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isEmail, setIsEmail] = useState([]);
  // console.log(isEmail)
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.email);
  const adminEmail = isEmail.find((email) => email.email);
  // console.log(adminEmail?.email);
  useEffect(() => {
    fetch("https://intense-bayou-17126.herokuapp.com/admins")
      .then((response) => response.json())
      .then((data) => setIsEmail(data));
  }, []);

  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <Link to="/">
          <h5 className="text-white shadow p-3 text-center rounded">
            D__ExPrEsS
          </h5>
        </Link>
        {isEmail.length === 0 && (
          <div className="text-center ">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <ul className="list-unstyled">
          {user.email === adminEmail?.email ? (
            <div>
              <li>
                <Link to="/admin/orderList" className="text-white">
                  <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/addService" className="text-white">
                  <FontAwesomeIcon icon={faPlusCircle} />{" "}
                  <span>Add Service</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/makeAdmin" className="text-white">
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/manageService" className="text-white">
                  <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/bookService" className="text-white">
                  <FontAwesomeIcon icon={faClipboardList} />{" "}
                  <span>Service Book</span>
                </Link>
              </li>
              <li>
                <Link to="/bookingList" className="text-white">
                  <FontAwesomeIcon icon={faTasks} /> <span>Booking List</span>
                </Link>
              </li>
              <li>
                <Link to="/review" className="text-white">
                  <FontAwesomeIcon icon={faEdit} /> <span>Review</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
        <div>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
