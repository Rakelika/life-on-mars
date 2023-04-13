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
        <li><a href="https://linkedin.com/"><FaLinkedin /></a></li>
        <li><a href="https://www.slideshare.net/"><FaSlideshare /></a></li>
      </ul>
      <a href="mailto: hello@lifeonmars.com" className='EmailFooter'>hello@lifeonmars.com</a>
      <p>©2023 - Life on Mars</p>
    </div>
    <div className='Col2'>
      <h5>Product</h5>
      <ul className='FooterUl'>
        <li><Link to="/houses">Overview</Link></li>
        <li><Link to="/house/2">Zopherus</Link></li>
        <li><Link to="/house/4">Ice House</Link></li>
        <li><Link to="/house/12">Spacehabs</Link></li>
        <li><Link to="/house/1">The Crater House</Link></li>
      </ul>
    </div>
    <div className='Col3'>
      <h5>Company</h5>
      <ul className='FooterUl'>
        <li><Link to="/about">About</Link></li>
        <li><Link to="#">Careers</Link></li>
        <li><Link to="#">Press</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className='Col4'>
      <h5>Resources</h5>
      <ul className='FooterUl'>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="#">Newsletter</Link></li>
        <li><Link to="#">Events</Link></li>
        <li><Link to="#">Help Center</Link></li>
        <li><Link to="#">Tutorials</Link></li>
      </ul>
    </div>
    </footer>
  </div>
  )
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
