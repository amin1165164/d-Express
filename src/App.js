import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Privateroute/Privateroute";
import Profile from "./Components/Profile/Profile";
import AddService from "./Components/Users/Admin/AddService/AddService";
import MakeAdmin from "./Components/Users/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Users/Admin/OdrerList/OrderList";
import ServiceManager from "./Components/Users/Admin/ServiceManager/ServiceManager";
import BookService from "./Components/Users/NormalUser/BookService/BookService";
import Review from "./Components/Users/NormalUser/Review/Review";
import UserOrders from "./Components/Users/NormalUser/UserOrders/UserOrders";
import SideBar from "./Components/Users/SideBar/SideBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <PrivateRoute path="/sideBar">
          <SideBar />
        </PrivateRoute>
        <Route path="/admin/addService">
          <AddService />
        </Route>
        <Route path="/admin/makeAdmin">
          <MakeAdmin />
        </Route>
        <Route path="/admin/orderList">
          <OrderList />
        </Route>
        <Route path="/review">
          <Review />
        </Route>

        <PrivateRoute path="/bookService/:id">
          <BookService />
        </PrivateRoute>
        <Route path="/bookingList">
          <UserOrders />
        </Route>
        <Route path="/admin/manageService">
          <ServiceManager/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
