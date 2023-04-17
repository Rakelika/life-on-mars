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
          value="3D printing"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">3D printing</span>
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Geological elements"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Geological elements</span>      
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Renewable bioplastic"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Renewable bioplastic</span>  
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Ice"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }} />
          <span className="slider round"></span>
          <span className="materialLabel">Ice</span>  
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Basalt fibre"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Basalt fibre</span> 
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Regolith plastic"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Regolith plastic</span> 
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Iron oxide"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Iron oxide</span>
        </label>
      </form>
      <form>
        <label  className="switch">
          <input 
          type="checkbox"
          value="Inflatable structure"
          onClick={(e) => {
          e.target.checked 
          ? setSelectedMaterials([...selectedMaterials, e.target.value])
          : setSelectedMaterials(selectedMaterials.filter(material => material !== e.target.value));
          }}/>
          <span className="slider round"></span>
          <span className="materialLabel">Inflatable structure</span> 
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
