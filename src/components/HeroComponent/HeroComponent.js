import React from 'react';
import PropTypes from 'prop-types';
import './HeroComponent.scss';
import { Link } from 'react-router-dom';

const HeroComponent = () => (
  <div className="HeroComponent">
    <div className='titleHero'>
      <h1>Explore the future of housing on Mars</h1>
      <h2>Welcome to your home on the red planet!</h2>
      <Link to="/houses"><button className='primary-btn'>Discover our houses</button></Link>
    </div>
  </div>
);

HeroComponent.propTypes = {};

HeroComponent.defaultProps = {};

export default HeroComponent;
