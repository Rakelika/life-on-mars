import React from 'react';
import PropTypes from 'prop-types';
import './SingleHouseComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../../store/houses/actions';
import ReactPlayer from 'react-player'

const SingleHouseComponent = () => {

  const {singleHouse,loadingSingleHouse} = useSelector ((state) => state.HousesReducer)
  const {user} = useSelector((state) => state.UserReducer)

  const dispatch = useDispatch();
  // const houseID = singleHouse.id;
  const userID = user.id;


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
  <div>

    <div className='titleContainer Container'>
      <h2>{singleHouse.name} </h2>
      <span>{singleHouse.architects}</span>
    </div>

    <div className='heroHouse Container'>
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
          <img src={item} alt="gallery"/>
        );
      })}
    </div>

    {/* <div className='galleryhowToUse'></div> */}

    <div className='informationHouses'>
      <div className='infoHouses'>
        <h2>More information</h2>
      {singleHouse && singleHouse.information?.map((item)=> {
        return (
          <p>{item.info}</p>
        );
      })}
      </div>
      <div>

      <ReactPlayer 
      url={singleHouse.video}
      light={singleHouse.image}
      width="100%"
      height="100%"
    />
    </div>
    </div>

    </div>
    <button className='ReserveBtn' onClick={sendFavorites}>+</button>
  </div>
)
};

SingleHouseComponent.propTypes = {};

SingleHouseComponent.defaultProps = {};

export default SingleHouseComponent;
