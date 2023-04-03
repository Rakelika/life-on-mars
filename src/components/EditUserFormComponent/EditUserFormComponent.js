import React, { useState } from 'react';
import './EditUserFormComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../store/users/actions';
import { useNavigate } from 'react-router';

const EditUserFormComponent = () => {

  const userId = useSelector((state) => state.UserReducer.user.id)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    // username: user.username,
    firstname: '', 
    // birthyear: user.birthyear,
    currentcity: '',
    // occupation: user.occupation,
    // userabout: user.userabout
  })

  const updateChange = (e) => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value })
    console.log(userData)
  }

  function submitChanges(event){
    if (userId && userData) {
      dispatch(editUser(userId, userData)).then(()=> {
        navigate('/')
        alert("has modificado tu perfil con éxito! :D")
      })
    }
    event.preventDefault()
  }

  return (
    <div className="EditUserFormComponent">
    Edit UserForm Component
    <form onSubmit={submitChanges}>
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
      <button type='submit'>Update Data</button>
    </form>
  </div>
  )
}

export default EditUserFormComponent;
