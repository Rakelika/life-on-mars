import React from 'react';
import PropTypes from 'prop-types';
import './FooterComponent.scss';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSlideshare,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
  <div className="FooterComponent">
  <footer>
    <div className='Col1'>
      <h3><Link to="/">Life on Mars</Link></h3>
      <ul className='FooterSocialMedia'>
        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
        <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
        <li><a href="https://facebook.com/"><FaFacebook /></a></li>
        <li><a href="https://facebook.com/"><FaLinkedin /></a></li>
        <li><a href="https://facebook.com/"><FaSlideshare /></a></li>
      </ul>
      <p>hello@lifeonmars.com</p>
      <span>©2023 - Life on Mars</span>
    </div>
    <div className='Col2'>
      <h5>Product</h5>
      <ul className='FooterUl'>
        <li>Overview</li>
        <li>Zopherus</li>
        <li>Ice House</li>
        <li>Spacehabs</li>
        <li>The crater house</li>
      </ul>
    </div>
    <div className='Col3'>
      <h5>Company</h5>
      <ul className='FooterUl'>
        <li>About us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Privacy policy</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className='Col4'>
      <h5>Resources</h5>
      <ul className='FooterUl'>
        <li>Blog</li>
        <li>Newsletter</li>
        <li>Events</li>
        <li>Help centre</li>
        <li>Tutorials</li>
      </ul>
    </div>
    </footer>
  </div>
  )
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
