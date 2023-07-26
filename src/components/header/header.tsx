import React from 'react';
// import TopBar from './topBar';
import MainHeader from './mainHeader';
import NavBar from './navBar';

const Header = () => {
  return (
    <div className="w-full">
      {/* <TopBar /> */}
      <MainHeader />
      <NavBar />
    </div>
  );
};

export default Header;
