import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AllHousesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../store/houses/actions';
import { Link } from 'react-router-dom';

const AllHousesComponent = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  const {houses,loadingHouses} = useSelector((state)=> state.HousesReducer)

  useEffect(()=>{
    dispatch(getHouses())
    
  },[])


  if(loadingHouses){
    return (
      <div>
        <p>searching for houses</p>
      </div>
    )
  }
  
  return(
  <div className="AllHousesComponent">
    <div>
      <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
    </div>
    {houses.filter(house=>{
      return search.toLowerCase() === ""
                ? house
                : house.name.toLowerCase().includes(search);
            })
    .map(house=>{
      return (
        <div key={house.id}>
          <Link to={`/house/${house.id}`}>
            <img src={house.image} alt={house.name}/>
          </Link>
          <h3>{house.name}</h3>
          <p>{house.architects}</p>
        </div>
      )
    })}
  </div>
)};

AllHousesComponent.propTypes = {};

AllHousesComponent.defaultProps = {};

export default AllHousesComponent;
