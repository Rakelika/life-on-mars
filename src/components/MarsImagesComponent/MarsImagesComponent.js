import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MarsImagesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMarsImages } from '../../store/nasa/actions';

const MarsImagesComponent = () => {

  const {marsImages, loadingMarsImages} = useSelector((state)=> state.NasaReducer);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getMarsImages())
  }, [])

  if (loadingMarsImages) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

    return (
    <section className="MarsImagesComponent"> 
      {marsImages && marsImages[0] && marsImages[0].camera ?
      <h3>Exploring Mars: Stunning {marsImages[0].camera.full_name} images captured by NASA's {marsImages[0].rover.name} on Earth Day {marsImages[0].earth_date}, 
      launched from Earth on {marsImages[0].rover.launch_date} and landed on Martian Soil on {marsImages[0].rover.landing_date}</h3>
      : ""}
      <article className='MarsGallery'>
        {marsImages.slice(5,8).map(photo => {
          return (
            <div key={photo.id} className='MarsImage'>
            <img src={photo.img_src} alt={photo.id} />
            </div>
          )
        })}
        {marsImages.slice(12, 15).map(photo => {
          return (
            <div key={photo.id} className='MarsImage'>
            <img src={photo.img_src} alt={photo.id} />
            </div>
          )
        })}
        {marsImages.slice(56, 59).map(photo => {
          return (
            <div key={photo.id} className='MarsImage'>
            <img src={photo.img_src} alt={photo.id} />
            </div>
          )
        })}
      </article>
    </section>
    )
};

MarsImagesComponent.propTypes = {};

MarsImagesComponent.defaultProps = {};

export default MarsImagesComponent;
