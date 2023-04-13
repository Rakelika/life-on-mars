import React from 'react';
import PropTypes from 'prop-types';
import './HeroComponent.scss';
import imageHero from "../../assets/life-on-mars-home.jpg"

const HeroComponent = () => (
  <div className="HeroComponent">
    <div className='titleHero'>
      <h1>Explore the future of housing on Mars</h1>
      <h2>Welcome to your home on the red planet!</h2>
      <button className='primary-btn'>Discover our houses</button>
    </div>
  </div>
);

HeroComponent.propTypes = {};

HeroComponent.defaultProps = {};

export default HeroComponent;
