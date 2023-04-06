import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FavoritesComponents.scss';
import { useDispatch, useSelector } from 'react-redux';
import HousesReducer from '../../store/houses/reducer';
import { deleteFavorite, getFavorites } from '../../store/houses/actions';

const FavoritesComponents = () => {

  const {userFavorites, loadingUserFavorites} = useSelector((state) => state.HousesReducer)
  const {user} = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch();
  const userId = user.id
  const favoriteHouseId = userFavorites.id
  console.log("userFavorites: ")
  console.log(favoriteHouseId)

  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [])

  function removeFavorite() {
      dispatch(deleteFavorite(userFavorites.id))
    }
  
  return (
  <div className="FavoritesComponents">
    <h3>Mis casas</h3>
    <div>
    {userFavorites.map(house=>{
      return (
        <div key={house.id}>
            <img src={house.house.image} alt={house.name}/>
          {house.house.name ? <h3>{house.house.name}</h3> : ""}
          <button onClick={removeFavorite}>Remove this house</button>
        </div>
      )
    })}
    </div>
  </div>
)};

FavoritesComponents.propTypes = {};

FavoritesComponents.defaultProps = {};

export default FavoritesComponents;
