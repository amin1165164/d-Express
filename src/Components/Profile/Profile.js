import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { name, email, img } = user;
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.replace("/");
  };
  return (
    <div className="text-center">
      <h1 className="my-4">User Profile</h1>
      <div className="row text-center">
        <div className="col-md-6 offset-md-3 shadow rounded border border-3 border-success p-5">
          <img src={img} alt="" />
          <h5>{name}</h5>
          <p>{email}</p>
        </div>
      </div>
      <div className='d-flex justify-content-between mt-5 container'>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>

        <button onClick={() => handleLogout()} className="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
