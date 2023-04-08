import React from 'react';
import PropTypes from 'prop-types';
import './MaterialFilterComponent.scss';

const MaterialFilterComponent = ({ setSelectedMaterials, selectedMaterials }) => {

return (
  <div className="MaterialFilterComponent">
      <h5>Materials</h5>
      <label>
        <input 
          type="checkbox"
          value="impresión 3D"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }} /> Impresión 3D
      </label>
      <label>
        <input 
          type="checkbox"
          value="elementos geológicos"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }} /> Elementos geológicos       
      </label>
      <label>
        <input 
          type="checkbox"
          value="bioplástico renovable"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }} /> Bioplástico renovable  
      </label>
      <label>
        <input 
          type="checkbox"
          value="hielo"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }} /> Hielo  
      </label>
      <label>
        <input 
          type="checkbox"
          value="fibra de basalto"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }}/> Fibra de basalto  
      </label>
      <label>
        <input 
          type="checkbox"
          value="plástico de regolito"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }}/> Plástico de regolito 
      </label>
      <label>
        <input 
          type="checkbox"
          value="óxido de hierro"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }}/> Óxido de hierro 
      </label>
      <label>
        <input 
          type="checkbox"
          value="estructura inflable"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
        }}/> Estructura inflable 
      </label>
  </div>
)
};

MaterialFilterComponent.propTypes = {};

MaterialFilterComponent.defaultProps = {};

export default MaterialFilterComponent;
