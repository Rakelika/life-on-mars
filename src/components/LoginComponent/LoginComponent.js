import React from 'react';
import './LoginComponent.scss';
import { Link, Navigate, useFormAction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, useFormik } from 'formik';
import { doLogin } from '../../store/users/actions';

const LoginComponent = () => {
  const { loadingUser } = useSelector((state) => state.UserReducer);
  // const error = useSelector((state) => state.UserReducer.error.message)
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    }, validate,
    onSubmit: (values) => {
      dispatch(doLogin(values)).then(() => navigate('/profile'));
    },
  });

  if (loadingUser) {
    return (
      <div>Cargando...</div>
    )
  }

  return (
    <div className="LoginComponent">
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
            </fieldset>
            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Login</button>
            {/* {error ? <div>{error}</div> : ""} */}
          </form>
    </div>
  );
};

export default LoginComponent;
