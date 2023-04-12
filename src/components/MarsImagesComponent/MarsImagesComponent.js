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
    <div className="MarsImagesComponent">
      <h2>FOTOS DE MARTE</h2>
      {marsImages.map(photo => {
        return (
          <div key={photo.id}>
          <img src={photo.img_src} alt={photo.id} />
          </div>
        )
      })}
    </div>
    )
};

MarsImagesComponent.propTypes = {};

MarsImagesComponent.defaultProps = {};

export default MarsImagesComponent;
