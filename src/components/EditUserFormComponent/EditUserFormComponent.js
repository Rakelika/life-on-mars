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

  return (
    <div className="EditUserFormComponent">
      Edit UserForm Component
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <label>User name:</label>
          <input 
            type='text'
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Email:</label>
          <input 
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input 
            type='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Current city:</label>
          <input 
            type='text'
            name='currentcity'
            value={formik.values.currentcity}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Occupation:</label>
          <input 
            type='text'
            name='occupation'
            value={formik.values.occupation}
            onChange={formik.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>About me:</label>
          <input 
            type='text'
            name='userabout'
            value={formik.values.userabout}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </fieldset>
        <fieldset>
          <label>Profile image:</label>
          <input 
            type='text'
            name='useravatar'
            value={formik.values.useravatar}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </fieldset>
        <button type="submit">Submit Changes</button>
        {/* <button type="reset" onClick={() => handleReset(formik)}>Clear form</button> */}
        </form>
        </div>
  )
}

export default EditUserFormComponent;