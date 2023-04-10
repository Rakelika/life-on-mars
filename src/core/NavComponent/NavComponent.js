import React from 'react';
import PropTypes from 'prop-types';
import './NavComponent.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavComponent = () => {

  const {user} = useSelector((state) => state.UserReducer)

  return (
    <div className="NavComponent">
    <nav>
      <div><h3><Link to="/">Life on Mars</Link></h3></div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/houses">Houses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {user && user.id ? ("") : (<Link to="/signup"> SignUp</Link>)}
          {user && user.id ? (<Link to="/profile"> Profile</Link>) : ("")}
        </ul>
      </nav>
  </div>
  )

};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
