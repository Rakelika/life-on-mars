import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './HouseFormComponent.scss';
import { useSelector, useDispatch } from 'react-redux';
import { editFavHouse, getSingleFavorite } from '../../store/houses/actions';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';

const HouseFormComponent = () => {

  const {singleFavorite, loadingSingleFavorite} = useSelector((state) => state.HousesReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      rooms: '',
      bathrooms: '',
      garden: '',
    },
    onSubmit: (values) => {
      if (singleFavorite.id && values) {
        const updatedHouse = {
          ...singleFavorite.house,
          name: values.name === '' ? singleFavorite.house.name : values.name,
          rooms: values.rooms === '' ? singleFavorite.house.rooms : values.rooms,
          bathrooms: values.bathrooms === '' ? singleFavorite.house.bathrooms : values.bathrooms,
          garden: values.garden === '' ? singleFavorite.house.garden : values.garden
        }
        dispatch(editFavHouse(singleFavorite.id, {house:updatedHouse})).then(()=> {
          navigate('/profile')
          alert("has modificado tu casa con éxito! :D")
        })
      }
    }
  })

  const handleReset = (formik) => {
    formik.resetForm();
  };

  return (
    <div className="HouseFormComponent">
      {singleFavorite && singleFavorite.house.name ? <p>{singleFavorite.house.name}</p> : ""}
      {singleFavorite && singleFavorite.house.image ? <img src={singleFavorite.house.image} alt={singleFavorite.house.name} width={200} /> : ""}
        <form onSubmit={formik.handleSubmit}>
        {/* RENAME */}
          <fieldset>
            <label htmlFor="name">Rename your house</label>
            <input 
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </fieldset>
        {/* ROOMS */}
          <fieldset>
            <label htmlFor="rooms">Number of rooms</label>
            <input 
              id="rooms"
              name="rooms"
              type="number"
              value={formik.values.rooms}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </fieldset>
        {/* BATHROOMS */}
          <fieldset>
            <label htmlFor="bathrooms">Number of bathrooms</label>
            <input 
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={formik.values.bathrooms}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </fieldset>
          {/* GARDEN */}
          <fieldset>
          <label htmlFor="garden">Do you want a garden?</label>
            <select
              id="garden"
              name="garden"
              value={formik.values.garden}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </fieldset> 
          <button type="submit" className='primary-btn'>Submit Changes</button>
          <button type="reset" className='secondary-btn' onClick={() => handleReset(formik)}>Clear form</button>
          </form>
        </div>
  )
};

HouseFormComponent.propTypes = {};

HouseFormComponent.defaultProps = {};

export default HouseFormComponent;
