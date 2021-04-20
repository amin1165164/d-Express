import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import BookingList from "../BookingList/BookingList";

const OrderList = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://intense-bayou-17126.herokuapp.com/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-8 mt-3">
          <h1 className="text-center">Order List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Service</th>
                <th>price</th>
                <th>Details</th>
                <th>Address</th>
                <th>Mobile Number</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingList booking={booking} key={booking._id}></BookingList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // <div>

    // </div>
  );
};

export default OrderList;
