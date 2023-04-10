import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MarsWeatherComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../store/nasa/actions';

const MarsWeatherComponent = () => {
  const {weather, loadingWeather} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWeather())
  },[])

  return (
  <div className="MarsWeatherComponent">
     <section className="MarsWeatherComponent">
      <h2>Weather in Mars {weather.terrestrial_date}</h2>
          <article key={weather.id}>
            <h4>Max temperature: {weather.max_temp}º</h4>
            <h4>Min temperature: {weather.min_temp}º</h4>
            <h4>Atmosphere opacity: {weather.atmo_opacity}</h4>
            <h4>Uv irradiance: {weather.local_uv_irradiance_index}</h4>
            <h4>Sunrise: {weather.sunrise}</h4>
            <h4>Sunset: {weather.sunset}</h4>
          </article>
    </section>
  </div>
  )
};

MarsWeatherComponent.propTypes = {};

MarsWeatherComponent.defaultProps = {};

export default MarsWeatherComponent;
