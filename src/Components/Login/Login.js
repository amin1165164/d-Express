import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from "../Home/Navbar/Navbar";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user);
        const loggedInUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="text-center">
          <button onClick={handleGoogleSignIn} className="btn btn-primary m-5">
            {" "}
            Google Sign In
          </button>
          {/* <p>{error}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
