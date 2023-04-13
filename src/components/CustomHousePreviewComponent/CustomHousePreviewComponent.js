import React from 'react';
import PropTypes from 'prop-types';
import './CustomHousePreviewComponent.scss';
import { useSelector } from 'react-redux';
import bedroom from "../../assets/bedroom.svg"
import bathroom from "../../assets/bathroom.svg"
import garden from "../../assets/garden.svg"

const CustomHousePreviewComponent = ( {values} ) => {

  const {singleFavorite, loadingSingleFavorite} = useSelector((state) => state.HousesReducer)

  if (loadingSingleFavorite) {
      <div>Loading...</div>
  }
  
  return (
  <section className="CustomHousePreviewComponent">
    {singleFavorite && singleFavorite.house.image ? <img src={singleFavorite.house.image} alt={singleFavorite.house.name} width={200} /> : ""}
    {values.name ? <h3>{values.name}</h3> : <h3>{singleFavorite && singleFavorite.house.name ? singleFavorite.house.name : ""}</h3>}
    <div className='CustomHouseDataBox'>
      <div className='CustomHouseDataItem'>
        <img className={`CustomHouseIcon ${values.rooms > 0 ? 'fullOpacity' : 'lowOpacity'}`} src={bedroom} alt="bedroom" />
        <p className={`${values.rooms > 0 ? 'fullOpacity' : 'lowOpacity'}`}>Bedrooms</p> 
        <p className='customValue'>{values.rooms}</p> 
      </div>
      <div className='CustomHouseDataItem'>
        <img className={`CustomHouseIcon ${values.bathrooms > 0 ? 'fullOpacity' : 'lowOpacity'}`} src={bathroom} alt="bathroom" />
        <p className={`${values.bathrooms > 0 ? 'fullOpacity' : 'lowOpacity'}`}>Bathrooms</p> 
        <p className='customValue'>{values.bathrooms}</p> 
      </div>
      <div className='CustomHouseDataItem'>
        <img className={`CustomHouseIcon ${values.garden ? 'fullOpacity' : 'lowOpacity'}`} src={garden} alt="bathroom" />
        <p className={`${values.garden ? 'fullOpacity' : 'lowOpacity'}`}>Garden</p> 
        <p className='customValue'>{values.garden}</p> 
      </div>
    </div>     
  </section>
)};

CustomHousePreviewComponent.propTypes = {};

CustomHousePreviewComponent.defaultProps = {};

export default CustomHousePreviewComponent;
