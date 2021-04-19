import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Privateroute/Privateroute";
import Admin from "./Components/Users/Admin/Admin";

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
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
