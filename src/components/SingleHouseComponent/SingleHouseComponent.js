import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SingleHouseComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../../store/houses/actions';
import ReactPlayer from 'react-player';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';


const SingleHouseComponent = () => {

  const {singleHouse,loadingSingleHouse} = useSelector ((state) => state.HousesReducer)
  const {user} = useSelector((state) => state.UserReducer)

  const dispatch = useDispatch();

  const userID = user.id;

  function sendFavorites(){
    dispatch(addFavorites({house: singleHouse, userId: userID}))
  }

  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate ();

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

    <div className='Container informationHouses'>
    <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
      <TabList>
        <Tab>More information</Tab>
        <Tab>Video</Tab>
        <Tab>Materials</Tab>
      </TabList>

      <TabPanel>
      <h2>More information</h2>
      {singleHouse && singleHouse.information?.map((item)=> {
        return (
          <p>{item.info}</p>
        );
      })}
      </TabPanel>
      <TabPanel>
      <div className='videoContainer'>
      <ReactPlayer 
      url={singleHouse.video}
      // light={singleHouse.image}
      width="100%"
      height="600px"
    />
    </div>
      </TabPanel>
      <TabPanel>
      {singleHouse && singleHouse.material?.map((item)=> {
        return (
          <p>{item}</p>
        );
      })}
      </TabPanel>
    </Tabs>
    </div>

    </div>
    <button className='ReserveBtn' 
      onClick={userID ? sendFavorites : () => navigate("/signup")}>+
    </button>
  </div>
)
};

SingleHouseComponent.propTypes = {};

SingleHouseComponent.defaultProps = {};

export default SingleHouseComponent;
