import React from "react";
import SideBar from "../../SideBar/SideBar";

const OrderList = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
    // <div>

    // </div>
  );
};

export default OrderList;
