import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MarsWeatherComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../store/nasa/actions';

const MarsWeatherComponent = () => {

  const {weather,loadingWeather} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWeather())
  },[])

  return (
  <div className="MarsWeatherComponent">
    MarsWeatherComponent Component
  </div>
  )
};

MarsWeatherComponent.propTypes = {};

MarsWeatherComponent.defaultProps = {};

export default MarsWeatherComponent;
