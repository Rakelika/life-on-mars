import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SingleHouseComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleHouse } from '../../store/houses/actions';


const SingleHouseComponent = () => {

  const {singleHouse,loadingSingleHouse,houses} = useSelector ((state) => state.HousesReducer)

  const dispatch = useDispatch ();

  function handleNext() {
    dispatch(getSingleHouse(singleHouse.id +1))
  }

  function handlePrevius() {
    dispatch(getSingleHouse(singleHouse.id -1))
  }

  if(loadingSingleHouse){
    return (
      <div>
        <p>searching house</p>
      </div>
    )
  }

return(
  <div className="SingleHouseComponent">
    <div>
      { singleHouse.id > 1 ? (
      <button onClick={handlePrevius}>Anterior</button>
      ) : null}
      { singleHouse.id < 12 ? (
      <button onClick={handleNext}>Siguiente</button>
      ) : null}
    </div>
    <div>
      <img src={singleHouse.image} alt={singleHouse.name}/>
      <h2>{singleHouse.name}</h2>
      <p>{singleHouse.description}</p>
    </div>
  </div>
)
};

SingleHouseComponent.propTypes = {};

SingleHouseComponent.defaultProps = {};

export default SingleHouseComponent;
