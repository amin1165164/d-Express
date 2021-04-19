import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#DAF5FF" }}>
      <Navbar />
      <HeaderMain />
    </div>
  );
};

export default Header;
