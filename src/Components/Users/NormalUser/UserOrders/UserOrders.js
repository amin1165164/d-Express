import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import OrderCard from "../OrderCard/OrderCard";

const UserOrders = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.email)

  const [userOrders, setUserOrders] = useState([]);
//   console.log(userOrders);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setUserOrders(data)});
  }, []);

  console.log(userOrders);


  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-9 mt-3">
          <h1 className="text-center">Order list of {user.name}</h1>
          <div className="row">
              {
                  userOrders.map(userOrder => <OrderCard userOrder={userOrder} key={userOrder._id}></OrderCard>)
              }
          </div>
      </div>
    </div>
  );
};

export default UserOrders;
