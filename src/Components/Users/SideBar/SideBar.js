import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faSignOutAlt,
  faPlusCircle,
  faList,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <Link to="/">
            <h5 className="text-white shadow p-3 text-center">D__ExPrEsS</h5>
        </Link>
        <ul className="list-unstyled">
          <li>
            <Link to="/orderList" className="text-white">
              <FontAwesomeIcon icon={faList} /> <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/addService" className="text-white">
              <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
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
