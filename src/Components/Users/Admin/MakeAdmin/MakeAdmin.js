import React, { useState } from "react";
import { useHistory } from "react-router";
import SideBar from "../../SideBar/SideBar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const history = useHistory();

  const handleOnBlur = (e) => {
    const newAdmin = admin;
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://intense-bayou-17126.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Review is successfully added");

        history.replace("/admin/makeAdmin");
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow mt-4">
        <form onSubmit={handleSubmit}>
          <h3>Make Admin</h3>
          <hr />
          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Email
            </label>
            <input
              onBlur={handleOnBlur}
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
