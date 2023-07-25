import React from "react";
import TopBar from "./topBar";
import MainHeader from "./mainHeader";
import NavBar from "./navBar";

const Header = () => {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavBar />
    </div>
  );
};

export default Header;
