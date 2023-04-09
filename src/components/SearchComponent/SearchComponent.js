import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchComponent.scss';

const SearchComponent = ({ setSearch }) => {

  return (
    <div className="SearchComponent">
        <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
};

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;
