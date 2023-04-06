import React from 'react';
import { useFormik } from 'formik';
import './SingUpComponent.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doSignUp } from '../../store/users/actions';

const SingUpComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(values.birthyear, 10);
    const age = currentYear - birthYear;

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 3) {
      errors.username = 'Must be 3 characters or more'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^[A-Za-z0-9]{5,}$/i.test(values.password)) {
      errors.password = 'Must be at least 5 characters and only contain letters and numbers';
    }

    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length > 15) {
      errors.firstname = 'Must be 15 characters or less';
    }
  
    if (!values.lastname) {
      errors.lastname = 'Required';
    } else if (values.lastname.length > 20) {
      errors.lastname = 'Must be 20 characters or less';
    }

    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
      errors.birthyear = 'Are you sure about this? Insert a valid year';
    } else if (age < 18) {
      errors.birthyear = 'You must be at least 18 years old to register';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      currentcity: '',
    },
    validate,
    onSubmit: (values) => {
      alert("welcome!!")
      dispatch(doSignUp(values)).then(() => {
        navigate('/profile');
      });
    },
  });

  return (
    <div className="SingUpComponent">
      <form onSubmit={formik.handleSubmit}>

       {/* USERNAME */}
       <fieldset>
       <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
      {formik.touched.username && formik.errors.username ? (<div>{formik.errors.username}</div>) : null}
      </fieldset>

      {/* EMAIL */}
      <fieldset>
      <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </fieldset>

      {/* PASSWORD */}
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
      </fieldset>

       {/* FIRST NAME */}
       <fieldset>
        <label htmlFor="firstname">First name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname ? (<div>{formik.errors.firstname}</div>) : null}
        </fieldset>
        
       {/* LAST NAME */}
       <fieldset>
        <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (<div>{formik.errors.lastname}</div>) : null}
      </fieldset>

      {/*BIRTHYEAR*/}
      <fieldset>
          <label>Birthyear:</label>
          <input 
            type='number'
            name='birthyear'
            value={formik.values.birthyear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthyear && formik.errors.birthyear ? (<div>{formik.errors.birthyear}</div>) : null}
        </fieldset>

      {/* CURRENT CITY */}
      <fieldset>
        <label htmlFor="currentcity">Current city</label>
          <input
            id="currentcity"
            name="currentcity"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentcity}
          />
      </fieldset>
      <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Sign Up</button>
    </form>
    </div>
  )}

  export default SingUpComponent
