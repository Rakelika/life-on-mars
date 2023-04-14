import React, { useState } from 'react';
import './EditUserFormComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../store/users/actions';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import ProfileUpdatePreviewComponent from '../ProfileUpdatePreviewComponent/ProfileUpdatePreviewComponent';

const EditUserFormComponent = () => {

  const user = useSelector((state) => state.UserReducer)
  const userId = useSelector((state) => state.UserReducer.user.id)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const validate = values => {
    const errors = {};

    if (values.username && values.username.length < 3) {
      errors.username = 'Must be 3 characters or more'
    }
    
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (values.password && !/^[A-Za-z0-9]{5,}$/i.test(values.password)) {
      errors.password = 'Must be at least 5 characters and only contain letters and numbers';
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      username: user.username,
      email: user.email,
      password: user.password,
      currentcity: user.currentcity,
      occupation: user.occupation,
      userabout: user.userabout,
      useravatar: user.useravatar
    },
    validate,
    onSubmit: (values) => {
      if (userId && values) {
        dispatch(editUser(userId, values)).then(()=> {
          navigate('/profile')
          alert("has modificado tu perfil con éxito! :D")
        })
      }
    }
  })


  const handleReset = (formik) => {
    formik.resetForm();
  };
  

  return (
    <div className="EditUserFormComponent">
      <section className='Col'>
      <h2>Edit my profile</h2>
        <form className='EditUserForm' onSubmit={formik.handleSubmit}>
        {/* USERNAME */}
          <fieldset>
            <input 
              id="username"
              name="username"
              type="text"
              placeholder="New Username"
              className='simpleInput'
              value={formik.values.username}
              onBlur={(e) => {if (!e.target.value) {formik.setFieldValue('username', user.username);} formik.handleBlur(e);}}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (<div className='errorMessage'>{formik.errors.username}</div>) : null}
          </fieldset>
          
          {/* EMAIL */}
          <fieldset>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="New Email"
              className='simpleInput'
              onChange={formik.handleChange}
              onBlur={(e) => {if (!e.target.value) {formik.setFieldValue('email', user.email);} formik.handleBlur(e);}}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (<div className='errorMessage'>{formik.errors.email}</div>) : null}
          </fieldset>

          {/* PASSWORD */}
          <fieldset>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="New Password"
              className='simpleInput'
              onChange={formik.handleChange}
              onBlur={(e) => {if (!e.target.value) {formik.setFieldValue('password', user.password);} formik.handleBlur(e);}}
              value={formik.values.password || user.password}
            />
            {formik.touched.password && formik.errors.password ? (<div className='errorMessage'>{formik.errors.password}</div>) : null}
          </fieldset>

          {/* CURRENT CITY */}
          <fieldset>
            <input 
              id="currentcity"
              name="currentcity"
              type="text"
              placeholder="Current city"
              className='simpleInput'
              value={formik.values.currentcity}
              onChange={formik.handleChange}
            />
          </fieldset>
          
          {/* OCCUPATION */}
          <fieldset>
            <input 
              id="occupation"
              name="occupation"
              type="text"
              placeholder="Current occupation"
              className='simpleInput'
              value={formik.values.occupation}
              onChange={formik.handleChange}
            />
          </fieldset>

          {/* AVATAR */}
          <fieldset>
            <input 
              id="useravatar"
              name="useravatar"
              type="text"
              placeholder="Insert an image URL"
              className='simpleInput'
              value={formik.values.useravatar}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </fieldset>

          {/* ABOUT */}
          <fieldset>
            <textarea 
              id="userabout"
              name="userabout"
              type="text"
              placeholder="Write something about you"
              className='simpleInput'
              value={formik.values.userabout}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </fieldset>
          <div className='FormButtonsRow'>
          <button className='primary-btn' type="submit">Save Changes</button>
          <button className='secondary-btn' type="reset" onClick={() => handleReset(formik)}>Clear form</button>
          </div>
          </form>
        </section>
        <section className='Col'>
          <ProfileUpdatePreviewComponent values={formik.values} ></ProfileUpdatePreviewComponent>
        </section>
        </div>
  )
}

export default EditUserFormComponent;