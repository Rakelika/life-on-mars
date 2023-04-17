import React from 'react';
import PropTypes from 'prop-types';
import './HowToUseComponent.scss';
import exporeHouses from "../../assets/process-explore-houses.jpg";
import signupHouses from "../../assets/process-signup-houses.jpg";
import customizeHouses from "../../assets/process-customize-houses.jpg"
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const HowToUseComponent = () => {

  const navigate = useNavigate ();

  const {user} = useSelector ((state) => state.UserReducer);

  const userID = user.id;

return(
  <div className="HowToUseComponent">
    <h2 className='centerText'>How to use our Mars house platform</h2>
     <div className='processGrid'>
      <div className='processCard'>
        <img src={exporeHouses} alt=""></img>
        <span className='fases'>Explore our houses</span>
        <p>Explore our homes and find the perfect property for you on the Red Planet. From cosy settler shelters to stunning mansions with crater views, explore now and start your new life on Mars!</p>
        <button className='secondary-btn'  onClick={() => navigate ("/houses")}>Explore</button>
      </div>
      <div className='processCard'>
        <img src={signupHouses} alt=""></img>
        <span className='fases'>Sign up and choose</span>
        <p>The next step to add your favourite houses to your list is to register on our platform. Once you have registered, you will be able to save your favourite houses and view them easily at any time.</p>
        <button className='secondary-btn' onClick={() => navigate ("/signup")}>Sign up</button>
      </div>
      <div className='processCard'>
        <img src={customizeHouses} alt=""></img>
        <span className='fases'>Customise your home</span>
        <p>It's time to customise them to your liking. Our team of professionals can also help you find the best configuration for your lifestyle on the Red Planet.¡ Personalise your home now and make it truly yours!</p>
        <button className='secondary-btn' onClick={() => {userID ? navigate ("/profile") : navigate ("/login") }}>Profile</button>
      </div>
     </div>
  </div>
);
}

HowToUseComponent.propTypes = {};

HowToUseComponent.defaultProps = {};

export default HowToUseComponent;
