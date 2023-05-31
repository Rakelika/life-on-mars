import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NavComponent.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { FaAlignRight } from "react-icons/fa";

const NavComponent = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect (() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {user} = useSelector((state) => state.UserReducer)

  return (
    <div className="NavComponent">
    <div>
      <h3><Link to="/">Life on Mars</Link></h3>
    </div>
    {isMobile ? (
      <Menu right width={'50%'} customBurgerIcon={<FaAlignRight/>} >
        <Link to="/houses">Houses</Link>
        <Link to="/about">About</Link>
        <Link to="/red-planet">Red Planet</Link>
        <Link to="/contact">Contact</Link>
        {user && user.id ? ('') : (<Link className="SignUpBtn" to="/signup"> {' '} SignUp</Link>)}
        {user && user.id ? (<Link to="/profile"><div className="greenCercle"></div>{user.username}</Link>) : ('')}
      </Menu>
    ) : (
      <nav>
        <ul>
          <li>
            <Link to="/houses">Houses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/red-planet">Red Planet</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {user && user.id ? ('') : (<Link className="SignUpBtn" to="/signup"> {' '} SignUp</Link>)}
            {user && user.id ? (<Link to="/profile"><div className="greenCercle"></div>{user.username}</Link>) : ('')}
          </li>
        </ul>
      </nav>
    )}
  </div>
  )

};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
