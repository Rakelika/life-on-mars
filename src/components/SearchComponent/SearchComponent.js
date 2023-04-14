import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchComponent.scss';
import { FaSistrix } from "react-icons/fa";

const SearchComponent = ({ setSearch }) => {

  return (
    <div className="SearchComponent">
        <input 
          className='regularInput' 
          type="text" 
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
};

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;
