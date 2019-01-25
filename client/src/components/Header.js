import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        I Should Invest
      </Link>
      <div className=" right menu">
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
