import React from 'react';
import PropTypes from 'prop-types';
import './MaterialFilterComponent.scss';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaToggleOn } from "react-icons/fa"; 

const MaterialFilterComponent = ({ setSelectedMaterials, selectedMaterials }) => {


return (
  <div className="MaterialFilterComponent">
   <Accordion>
      <AccordionItem header={<span><FaToggleOn className='IconAcordeon'/> Select materials you prefer</span>}>
      <form>
        <label className="switch">      
          <input
          type="checkbox"
          value="impresión 3D"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Impresión 3D</span>
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="elementos geológicos"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Elementos geológicos</span>      
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="bioplástico renovable"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Bioplástico renovable</span>  
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="hielo"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Hielo</span>  
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="fibra de basalto"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Fibra de basalto</span> 
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="plástico de regolito"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Plástico de regolito</span> 
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="óxido de hierro"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Óxido de hierro</span>
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="estructura inflable"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Estructura inflable</span> 
        </label>
      </form>
      </AccordionItem>
      </Accordion>
  </div>
)
};

MaterialFilterComponent.propTypes = {};

MaterialFilterComponent.defaultProps = {};

export default MaterialFilterComponent;
