import React, { useState } from 'react';
import './SingUpComponent.scss';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { doSignUp } from '../../store/users/actions';

const SingUpComponent = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    birthyear: '',
    currentcity: '',
    occupation: '',
    userabout: '',
    useravatar: ''
  });

  const saveFormChanges = (e) => {
    const { name, value } = e.target;
    setNewUser({...newUser, [name]: value })
  } 

  function submitLogin(){
    dispatch(doSignUp(newUser)).then(()=> {
      navigate('/')
    });    
  }

  return (
      <div className="SingUpComponent">
      <form>
        <fieldset>
          <label>Username:</label>
          <input type="text" name="username" value={newUser.username} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Email:</label>
          <input type="email" name="email" value={newUser.email} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" value={newUser.password} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Firstname:</label>
          <input type="text" name="firstname" value={newUser.firstrname} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Lastname:</label>
          <input type="text" name="lastname" value={newUser.lastname} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Birthyear:</label>
          <input type="number" name="birthyear" value={newUser.birthyear} onChange={saveFormChanges} />
        </fieldset>
        <fieldset>
          <label>Currentcity:</label>
          <input type="text" name="currentcity" value={newUser.currentcity} onChange={saveFormChanges} required />
        </fieldset>
        <fieldset>
          <label>Occupation:</label>
          <input type="text" name="occupation" value={newUser.occupation} onChange={saveFormChanges}  />
        </fieldset>
        <fieldset>
          <label>About me:</label>
          <input type="text" name="userabout" value={newUser.userabout} onChange={saveFormChanges} />
        </fieldset>
        <fieldset>
          <label>My Avatar:</label>
          <input type="text" name="useravatar" value={newUser.useravatar} placeholder='Paste an URL' onChange={saveFormChanges} />
        </fieldset>
        <Link onClick={submitLogin}>SignUp</Link>
      </form>
      </div>
  )
};

export default SingUpComponent;
