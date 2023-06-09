import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './HouseFormComponent.scss';
import { useSelector, useDispatch } from 'react-redux';
import { editFavHouse, getSingleFavorite } from '../../store/houses/actions';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomHousePreviewComponent from '../CustomHousePreviewComponent/CustomHousePreviewComponent'
import Swal from 'sweetalert2';

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
          Swal.fire({
            title: 'House updated',
            text: 'Your house has been customized',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        })
      }
    }
  })

  const handleReset = (formik) => {
    formik.resetForm();
  };

  return (
    <div className="HouseFormComponent">
      <section className='Col'>
      <h2>Let's customize!</h2>
      <p className='centerText'>Customize your Martian home with our form. Edit the details of your favorite house and make it uniquely yours. You can choose the number of bedrooms and bathrooms, select if you want a garden, and even rename your house!</p>
        <form className='EditHouseForm' onSubmit={formik.handleSubmit}>
        {/* RENAME */}
          <fieldset>
            <input 
              id="name"
              name="name"
              type="text"
              placeholder="Add a custom name for this house"
              className='simpleInput'
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
              type="range"
              min="0"
              max="10"
              placeholder="Number of rooms"
              className='simpleInput rangeInput'
              value={formik.values.rooms}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </fieldset>
        {/* BATHROOMS */}
          <fieldset>
          <label htmlFor="rooms">Number of bathrooms</label>
            <input 
              id="bathrooms"
              name="bathrooms"
              type="range"
              min="0"
              max="5"
              placeholder="Number of rooms"
              className='simpleInput rangeInput'
              value={formik.values.bathrooms}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </fieldset>
          {/* GARDEN */}
          
          <label className='titleGarden'>Do you want a garden?</label>
          <fieldset className='switchFieldset'>
          <div className='switchForm'>
          <label className="switch">
            <input
              type="radio"
              name="garden"
              value="Yes"
              checked={formik.values.garden === "Yes"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="slider round"></span>
            <span className="materialLabel">Yes</span>
          </label>
          </div>
          <div className='switchForm'>
          <label  className="switch">
            <input
              type="radio"
              name="garden"
              value="No"
              checked={formik.values.garden === "No"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="slider round"></span>
            <span className="materialLabel">No</span>
          </label>
          </div>
          </fieldset> 
          <div className='FormButtonsRow'>
            <button type="submit" className='primary-btn'>Submit Changes</button>
            <button type="reset" className='secondary-btn' onClick={() => handleReset(formik)}>Clear form</button>
          </div>
          </form>
          </section>
          <section className='Col'>
            <CustomHousePreviewComponent values={formik.values}></CustomHousePreviewComponent>
          </section>
        </div>
  )
};

HouseFormComponent.propTypes = {};

HouseFormComponent.defaultProps = {};

export default HouseFormComponent;
