import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FavoritesComponents.scss';
import { useDispatch, useSelector } from 'react-redux';
import HousesReducer from '../../store/houses/reducer';
import { deleteFavorite, getFavorites } from '../../store/houses/actions';
import { Link, Navigate } from 'react-router-dom';

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
  <div className="FavoritesComponents">
    <h2>My houses</h2>
    <div>
    {userFavorites.length === 0 ? "You don't have any house"  : ""}
    {userFavorites.map(house=>{
      return (
        <div key={house.id}>
            <img src={house.house.image} alt={house.name}/>
          {house.house.name ? <h3>{house.house.name}</h3> : ""}
          {house.house.description ? <p>{house.house.description}</p> : ""}
          {house.house.rooms ? <p>Number of rooms: {house.house.rooms}</p> : ""}
          <button onClick={() => removeFavorite(house.id)}>Remove this house</button>
          <Link to={`/house-form/${house.id}`}>Custom house</Link>
        </div>
      )
    })}
    </div>
  </div>
)};

FavoritesComponents.propTypes = {};

FavoritesComponents.defaultProps = {};

export default FavoritesComponents;
