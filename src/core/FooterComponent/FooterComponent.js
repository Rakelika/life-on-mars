import React from 'react';
import PropTypes from 'prop-types';
import './FooterComponent.scss';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
  <div className="FooterComponent">
    <div className='Col1'>
      <h3><Link to="/">Life on Mars</Link></h3>
      <ul className='FooterSocialMedia'>
        <li><a href="https://twitter.com/">⬜</a></li>
        <li><a href="https://www.instagram.com/">⬜</a></li>
        <li><a href="https://facebook.com/">⬜</a></li>
        <li><a href="https://facebook.com/">⬜</a></li>
        <li><a href="https://facebook.com/">⬜</a></li>
      </ul>
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
  </div>
  )
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
