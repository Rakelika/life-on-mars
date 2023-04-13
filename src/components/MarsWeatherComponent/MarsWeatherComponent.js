import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MarsWeatherComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../store/nasa/actions';
import sun from "../../assets/sun.svg"
import irradiance from "../../assets/irradiance.svg"

const MarsWeatherComponent = () => {
  const {weather, loadingWeather} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWeather())
  },[])

  return (
  <section className="MarsWeatherComponent">
        <div className='MarsWeatherCard'>
        <h2 className='centerText'>The Weather in Mars today</h2>
          <section  key={weather.id}>
            <article className='MarsWeatherItem'>
              {weather.atmo_opacity === "Sunny" ? <img src={sun} alt="sunny"/> : ""}
              <h4>{weather.atmo_opacity}</h4>
            </article>
            <article className='MarsWeatherItem'>
              <h3 className='h3Number'>{weather.max_temp}º</h3>
              <h4>Max</h4>
            </article>
            <article className='MarsWeatherItem'>
              <h3 className='h3Number'>{weather.sunrise}</h3>
              <h4>Sunrise</h4>
            </article>
            <article className='MarsWeatherItem'>
              {weather.local_uv_irradiance_index === "Moderate" ? <img src={irradiance} alt="moderate" /> : ""}
              <h4>UV irradiance</h4>
            </article>
            <article className='MarsWeatherItem'>
              <h3 className='h3Number'>{weather.min_temp}º</h3>
              <h4>Min</h4>
            </article>
            <article className='MarsWeatherItem'>
              <h3 className='h3Number'>{weather.sunset}</h3>
              <h4>Sunset</h4>
            </article>
          </section>
        </div>
  </section>
  )
};

MarsWeatherComponent.propTypes = {};

MarsWeatherComponent.defaultProps = {};

export default MarsWeatherComponent;
