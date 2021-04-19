import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Privateroute/Privateroute";
import AddService from "./Components/Users/Admin/AddService/AddService";
import Admin from "./Components/Users/Admin/Admin";
import MakeAdmin from "./Components/Users/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Users/Admin/OdrerList/OrderList";

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
        <Route path="/admin/addService">
          <AddService/>
        </Route>
        <Route path="/admin/makeAdmin">
          <MakeAdmin/>
        </Route>
        <PrivateRoute path="/orderList">
          <OrderList/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
