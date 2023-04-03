import React, { useState } from 'react';
import './LoginComponent.scss';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/users/actions';

const LoginComponent = () => {

  const { user, loadingUser } = useSelector((state) => {
    console.log(state);
    return state.UserReducer;
  });

  const [email, setEmail] = useState("pablo@mars.com");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();

  function submitLogin() {
    dispatch(doLogin({ email: email, password: password }));
  }

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (user && user.id) {
    console.log("usuario ok", user);
    return <Navigate to="/profile" replace></Navigate>;
  } 

  return (
    <div className="LoginComponent">
      <form>
        <fieldset>
          <label>Email:</label>
          <input
            id='email'
            value={email}
            placeholder='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input
            id='password'
            value={password}
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
        <Link onClick={submitLogin}>Login</Link>
      </form>
    </div>
  );
};

export default LoginComponent;
