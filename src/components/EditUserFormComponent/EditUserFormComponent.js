import React, { useState } from 'react';
import './EditUserFormComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../store/users/actions';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

const EditUserFormComponent = () => {

  const user = useSelector((state) => state.UserReducer)
  const userId = useSelector((state) => state.UserReducer.user.id)
  const [showEditForm, setShowEditForm] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const validate = values => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^[A-Za-z0-9]{5,}$/i.test(values.password)) {
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
          setShowEditForm(false)
          navigate('/profile')
          alert("has modificado tu perfil con éxito! :D")
        })
      }
    }
  })

  if (showEditForm === false) {
    return ""
  }

  const handleReset = (formik) => {
    formik.resetForm();
  };
  

  return (
    <div className="EditUserFormComponent">
      <form className='EditUserForm' onSubmit={formik.handleSubmit}>
      {/* USERNAME */}
        <fieldset>
          {/* <label htmlFor="username">Username</label> */}
          <input 
            id="username"
            name="username"
            type="text"
            placeholder="New Username"
            className='simpleInput'
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </fieldset>
        
        {/* EMAIL */}
        <fieldset>
          {/* <label htmlFor="email">Email</label> */}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="New Email"
            className='simpleInput'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
        </fieldset>

        {/* PASSWORD */}
        <fieldset>
          {/* <label htmlFor="password">Password</label> */}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="New Password"
            className='simpleInput'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
        </fieldset>

        {/* CURRENT CITY */}
        <fieldset>
          {/* <label htmlFor="currentcity">Current city</label> */}
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
          {/* <label htmlFor="occupation">Occupation</label> */}
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
          {/* <label htmlFor="useravatar">Avatar</label> */}
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
          {/* <label htmlFor="userabout">About me</label> */}
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
        <button className='primary-btn' type="submit">Submit Changes</button>
        <button className='secondary-btn' type="reset" onClick={() => handleReset(formik)}>Clear form</button>
        </form>
        </div>
  )
}

export default EditUserFormComponent;