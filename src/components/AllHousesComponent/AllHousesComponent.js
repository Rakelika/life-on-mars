import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './AllHousesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../store/houses/actions';
import { Link } from 'react-router-dom';

const AllHousesComponent = ({ search, selectedMaterials }) => {

  const dispatch = useDispatch()

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
  {houses
    .filter((house) => {
      return search.toLowerCase() === ""
        ? // Si no se está haciendo ninguna búsqueda por nombre,
          // filtrar por materiales seleccionados
          selectedMaterials.length === 0 ||
              selectedMaterials.every(
                (material) => house.material.includes(material)
              ) 
        : // Si se está buscando por nombre, aplicar filtro por nombre y materiales seleccionados
          house.name.toLowerCase().includes(search) &&
              (selectedMaterials.length === 0 ||
                selectedMaterials.some(
                  (material) => house.material.includes(material)
                ))
    }).map(house=>{
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
