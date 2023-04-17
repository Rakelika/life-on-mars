import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './NasaPictureDayComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPicture } from '../../store/nasa/actions';
import { Orbit } from '@uiball/loaders'

const NasaPictureDayComponent = () => {
  const {nasaPictureDay,loadingImages} = useSelector((state)=> state.NasaReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPicture())
  },[])

  if (loadingImages) {
    return (
      <div className='loadingOrbit'>
       <Orbit 
          size={25}
          speed={1.5} 
          color="#f5f5f5"
        />
      </div>
    )
  }

  return (
    <section className="NasaPictureDayComponent">
      <h2>NASA's Picture of the Day</h2>
      <h3>Explore the Universe through fascinating daily imagery</h3>
          <article key={nasaPictureDay.title} className='NasaImgContainer'>
            <div className='NasaPictureDayImg'>
              <img src={nasaPictureDay.url} alt={nasaPictureDay.title} />
            </div>
            <div className='NasaPictureDayDescription'>
              <h4>{nasaPictureDay.date}</h4>
              <h4 className='NasaPictureDayTitle'>{nasaPictureDay.title}</h4>
              <h5>{nasaPictureDay.copyright}</h5>
              <p>{nasaPictureDay.explanation}</p>
            </div>
          </article>
    </section>
  );
  
};

export default NasaPictureDayComponent;
