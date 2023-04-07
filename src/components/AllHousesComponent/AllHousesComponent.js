import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AllHousesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../store/houses/actions';
import { Link } from 'react-router-dom';

const AllHousesComponent = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  const [material, setMaterial] = useState("");

  const {houses,loadingHouses} = useSelector((state)=> state.HousesReducer)

  useEffect(()=>{
    dispatch(getHouses())
    
  },[])

  /*pruebas*/
  function handleMaterialChange(e) {
    setMaterial(e.target.value);
  }

  const housesMaterialFiltered = houses.filter((house) => house.material.includes(material));

  console.log(housesMaterialFiltered)
  /*pruebas*/


  if(loadingHouses){
    return (
      <div>
        <p>searching for houses</p>
      </div>
    )
  }
  
  return(
  <div className="AllHousesComponent">

  {/* Buscador */}
    <div>
      <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
    </div>

  {/*Filtrado por materiales*/}

    <div>
      <h5>Materials</h5>
      <label>
        <input 
          type="checkbox"
          value="impresión 3D"
          checked={material === 'impresión 3D'}
          onChange={handleMaterialChange}/> Impresión 3D
      </label>
      <label>
        <input 
          type="checkbox"
          value="elementos geológicos"
          checked={material === 'elementos geológicos'}
          onChange={handleMaterialChange}/> Elementos geológicos       
      </label>
      <label>
        <input 
          type="checkbox"
          value="bioplástico renovable"
          checked={material === 'bioplástico renovable'}
          onChange={handleMaterialChange}/> Bioplástico renovable  
      </label>
      <label>
        <input 
          type="checkbox"
          value="hielo"
          checked={material === 'hielo'}
          onChange={handleMaterialChange}/> Hielo  
      </label>
      <label>
        <input 
          type="checkbox"
          value="fibra de basalto"
          checked={material === 'fibra de basalto'}
          onChange={handleMaterialChange}/> Fibra de basalto  
      </label>
      <label>
        <input 
          type="checkbox"
          value="plástico de regolito"
          checked={material === 'plástico de regolito'}
          onChange={handleMaterialChange}/> Plástico de regolito 
      </label>
      <label>
        <input 
          type="checkbox"
          value="óxido de hierro"
          checked={material === 'óxido de hierro'}
          onChange={handleMaterialChange}/> Óxido de hierro 
      </label>
      <label>
        <input 
          type="checkbox"
          value="estructura inflable"
          checked={material === 'estructura inflable'}
          onChange={handleMaterialChange}/> Estructura inflable 
      </label>
    </div>

  {/*Casas*/}

  {housesMaterialFiltered.map(house => {
    return(
        <div key={house.id}>
          <h2>{house.name}</h2>
          {/* <p>Material: {house.material}</p> */}
        </div>
  )})}

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
