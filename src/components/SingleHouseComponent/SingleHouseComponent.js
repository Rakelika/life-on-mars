import React from 'react';
import PropTypes from 'prop-types';
import './SingleHouseComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../../store/houses/actions';


const SingleHouseComponent = () => {

  const {singleHouse,loadingSingleHouse} = useSelector ((state) => state.HousesReducer)
  const {user} = useSelector((state) => state.UserReducer)

  const dispatch = useDispatch();
  // const houseID = singleHouse.id;
  const userID = user.id;

  // console.log(houseID + 'house id')
  console.log(userID + 'user id')

  function sendFavorites(){
    dispatch(addFavorites({house: singleHouse, userId: userID}))
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

    <div className='Container'>
      <img src={singleHouse.image} alt={singleHouse.name}/>
      <h2>{singleHouse.name}</h2>
      <p>{singleHouse.description}</p>
    </div>
    <button onClick={sendFavorites}>Reservar</button>
  </div>
)
};

SingleHouseComponent.propTypes = {};

SingleHouseComponent.defaultProps = {};

export default SingleHouseComponent;
