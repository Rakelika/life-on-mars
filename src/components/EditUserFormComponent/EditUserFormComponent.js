import React, { useState } from 'react';
import './EditUserFormComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editUser } from '../../store/users/actions';

const EditUserFormComponent = () => {

  const user = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    // username: user.username,
    firstname: user.firstname, 
    // birthyear: user.birthyear,
    currentcity: user.currentcity,
    // occupation: user.occupation,
    // userabout: user.userabout
  })

  const updateChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  function submitChanges(){
    dispatch(editUser(userData))
  }

  return (
    <div className="EditUserFormComponent">
    Edit UserForm Component
    <form>
      <fieldset>
        <label>Name:</label>
        <input 
          type='text'
          name='firstname'
          value={userData.firstname}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Currentcity:</label>
        <input 
          type='text'
          name='currentcity'
          value={userData.currentcity}
          onChange={updateChange}
        />
      </fieldset>
      <button onClick={submitChanges}>Update Data</button>
    </form>
  </div>
  )
}

export default EditUserFormComponent;
