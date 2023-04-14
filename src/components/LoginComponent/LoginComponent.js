import React, { useEffect, useState } from 'react';
import './LoginComponent.scss';
import { Link, Navigate, useFormAction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, useFormik } from 'formik';
import { doLogin } from '../../store/users/actions';

const LoginComponent = () => {
  const { loadingUser, error, userAuth } = useSelector((state) => state.UserReducer);
  const [loginError, setLoginError] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setLoginError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (userAuth) {
      navigate('/profile');
    }
  }, [userAuth]);

  const validate = values => {
    const errors = {};

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

    return errors;

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        dispatch(doLogin(values));
      } catch (error) {
        setLoginError(error.message);
      }
    },
  });

  if (loadingUser) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="LoginComponent">
          <form className='LoginForm' onSubmit={formik.handleSubmit}>
            <fieldset>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className='simpleInput'
                onChange={formik.handleChange}
                onFocus={() => setLoginError('')}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <div className='errorMessage'>{formik.errors.email}</div> : null}
            </fieldset>
            <fieldset>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className='simpleInput'
                onChange={formik.handleChange}
                onFocus={() => setLoginError('')}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (<div className='errorMessage'>{formik.errors.password}</div>) : null}
            </fieldset>
            {loginError && <div className='errorMessage'>{loginError}</div>}
            <button type="submit" className={`${!(formik.isValid && formik.dirty) ? 'primary-btn disabled-btn' : 'primary-btn'}`} disabled={!(formik.isValid && formik.dirty)}>Login</button>
          </form>
    </div>
  );
};

export default LoginComponent;
