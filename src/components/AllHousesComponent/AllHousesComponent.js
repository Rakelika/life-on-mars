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
  <section className="AllHousesComponent Container">
    {houses.filter((house) => {
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
                selectedMaterials.every(
                  (material) => house.material.includes(material)
                ))
    }).map(house => (
      <article key={house.id} className='cardHouse'>
        <Link to={`/house/${house.id}`}>
          <img src={house.image} alt={house.name}/>
        </Link>
        <div className='cardResume'>
          <div>
            <h3>{house.name}</h3>
            <p className='nameArchitect'>{house.architects}</p>
            <p>{house.material.join(" | ")}</p>
          </div>
          <Link to={`/house/${house.id}`}>
            <button className='primary-btn'>Explore</button>
          </Link>
        </div>
      </article>
    ))}
    {houses.filter((house) => {
        return search.toLowerCase() === "" ?
            selectedMaterials.length === 0 ||
            selectedMaterials.every((material) => house.material.includes(material))
            :
            house.name.toLowerCase().includes(search) &&
            (selectedMaterials.length === 0 ||
                selectedMaterials.every(
                    (material) => house.material.includes(material)
                ))
        }).length === 0 && (
        <div className='Container'>
          <p className='centerText'>(｡•́︿•̀｡)</p> 
          <p className='centerText'>Sorry, there are no houses with these characteristics</p>
        </div>
    )
    }
  </section>
)};

AllHousesComponent.propTypes = {};

AllHousesComponent.defaultProps = {};

export default AllHousesComponent;
