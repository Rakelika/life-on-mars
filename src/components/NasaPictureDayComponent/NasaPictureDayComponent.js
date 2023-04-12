import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './NasaPictureDayComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPicture } from '../../store/nasa/actions';

const NasaPictureDayComponent = () => {
  const {nasaPictureDay,loadingImages} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPicture())
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
          <article key={nasaPictureDay.title}>
            <img src={nasaPictureDay.url} width={300} alt={nasaPictureDay.title} />
            <h4>{nasaPictureDay.title} - {nasaPictureDay.date}</h4>
            <h5>{nasaPictureDay.copyright}</h5>
            <p>{nasaPictureDay.explanation}</p>
          </article>
    </section>
  );
  
};

export default NasaPictureDayComponent;
