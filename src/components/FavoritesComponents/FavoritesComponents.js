import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FavoritesComponents.scss';
import { useDispatch, useSelector } from 'react-redux';
import HousesReducer from '../../store/houses/reducer';
import { deleteFavorite, getFavorites } from '../../store/houses/actions';
import { Link, Navigate } from 'react-router-dom';
import bedroom from "../../assets/bedroom.svg"
import bathroom from "../../assets/bathroom.svg"
import garden from "../../assets/garden.svg"

const FavoritesComponents = () => {

  const {userFavorites, loadingUserFavorites} = useSelector((state) => state.HousesReducer)
  const {user} = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch();
  const userId = user.id
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getFavorites(userId));
  }, [refresh]);

  function removeFavorite(thishouse) {
      dispatch(deleteFavorite(thishouse)).then(() => {
        setRefresh(!refresh);
        Navigate('/profile');
      })
    }
  
  return (
  <section className="FavoritesComponents">
    {userFavorites.length === 0 ? 
    <div className='noHouses'>
    <h3>You haven't added any house yet, let's get started!</h3>
    <Link to="/houses" className='secondary-btn-invt centerText'>Explore houses</Link>
    </div>  : ""}
    {userFavorites.map(house=>{
      return (
        <article key={house.id} className='cardHouse'>
            <img src={house.house.image} alt={house.name}/>
            <span>{house.house.rooms || house.house.bathrooms || house.house.garden ? <div className='customTag'><p>Customized</p></div> : ''}</span>
          <div className='cardInfo'>
            <div className='cardResume'>
              {house.house.name ? <h3>{house.house.name}</h3> : ""}
              <section className='customItems'>
              {house.house.rooms ? 
              <div className='favCardItem'>
              <img className='favCardIcon' src={bedroom} alt='bedrooms'/>
              <p>{house.house.rooms}</p>
              </div>
              : ""}
              {house.house.bathrooms ? 
              <div className='favCardItem'>
              <img className='favCardIcon' src={bathroom} alt='bedrooms'/>
              <p>{house.house.bathrooms}</p>
              </div>
              : ""}
              {house.house.garden ? 
              <div className='favCardItem'>
              <img className='favCardIcon' src={garden} alt='bedrooms'/>
              <p>{house.house.garden}</p>
              </div>
              : ""}
              </section>
            </div>
            <div>
              {house.house.title ?
              <h5>{house.house.title}</h5> : ""}
              {house.house.description ? 
              <p>{house.house.description}</p> 
              : ""}
            </div>
            <div className='cardButtons'>
              <Link to={`/house-form/${house.id}`} className='secondary-btn centerText'>Custom house</Link>
              <button className='secondary-btn centerText' onClick={() => removeFavorite(house.id)}>Remove this house</button>
            </div>
          </div>
        </article>
      )
    })}
  </section>
)};

FavoritesComponents.propTypes = {};

FavoritesComponents.defaultProps = {};

export default FavoritesComponents;
