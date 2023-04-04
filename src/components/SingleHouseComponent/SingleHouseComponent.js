import React from 'react';
import PropTypes from 'prop-types';
import './SingleHouseComponent.scss';
import { useSelector } from 'react-redux';


const SingleHouseComponent = () => {

  const {singleHouse,loadingSingleHouse} = useSelector ((state) => state.HousesReducer)

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
