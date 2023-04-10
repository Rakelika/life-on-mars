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
      rooms: ''
    },
    onSubmit: (values) => {
      if (singleFavorite.id && values) {
        const updatedHouse = {
          ...singleFavorite.house,
          rooms: values.rooms
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
      <form onSubmit={formik.handleSubmit}>
      {/* ROOMS */}
        <fieldset>
          <label htmlFor="rooms">Rooms</label>
          <input 
            id="rooms"
            name="rooms"
            type="number"
            value={formik.values.rooms}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </fieldset>
        
        <button type="submit">Submit Changes</button>
        <button type="reset" onClick={() => handleReset(formik)}>Clear form</button>
        </form>
        {singleFavorite.house.name ? <p>{singleFavorite.house.name}</p> : ""}
      {singleFavorite.house.image ? <img src={singleFavorite.house.image} alt={singleFavorite.house.name} width={200} /> : ""}
        </div>
  )
};

HouseFormComponent.propTypes = {};

HouseFormComponent.defaultProps = {};

export default HouseFormComponent;
