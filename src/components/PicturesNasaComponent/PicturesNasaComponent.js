import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './PicturesNasaComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from '../../store/nasa/actions';

const PicturesNasaComponent = () => {
  const {nasaImages,loadingImages} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPictures())
  },[])

  if (loadingImages) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <section className="PicturesNasaComponent">
      <h2>Picture of the day</h2>
          <article key={nasaImages.title}>
            <img src={nasaImages.url} width={300} alt={nasaImages.title} />
            <h4>{nasaImages.title} - {nasaImages.date}</h4>
            <h5>{nasaImages.copyright}</h5>
            <p>{nasaImages.explanation}</p>
          </article>
    </section>
  );
  
};

PicturesNasaComponent.propTypes = {};

PicturesNasaComponent.defaultProps = {};

export default PicturesNasaComponent;
