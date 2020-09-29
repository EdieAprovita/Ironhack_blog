import React from 'react';

import Background from '../assets/background.jpg';

const Header = () => {
  return (
    <div className='container-fluid'>
    <img id="header-img" src={Background} alt="background"/>
      <h1 className="header-title text-center">
        Welcome Ironhackers!! <br />
        To the Ironhack Blog
      </h1>
    </div>
  );
};

export default Header;
