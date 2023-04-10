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
  <div className="SingleHouseComponent Container">
  <div>

    <div className='titleContainer'>
      <h2>{singleHouse.name} </h2>
      <span>{singleHouse.architects}</span>
    </div>

    <div className='heroHouse'>
    <div className='heroHouseImg'>
      <img src={singleHouse.image} alt={singleHouse.name}/>
    </div>
    <div className='heroHouseDescription'>
      <h3>{singleHouse.title}</h3>
      <p>{singleHouse.description}</p>
    </div>
    </div>

    <div className='galleryHouses'>
      {singleHouse && singleHouse.gallery?.map((item)=> {
        return (
          <img src={item} alt="hola"/>
        );
      })}

    </div>

    <div className='embed-container'>
    <iframe title={singleHouse.name} src={singleHouse.video} allowFullScreen></iframe>
    </div>

    </div>
    <button className='primary-btn' onClick={sendFavorites}>Reserve</button>
  </div>
)
};

SingleHouseComponent.propTypes = {};

SingleHouseComponent.defaultProps = {};

export default SingleHouseComponent;
