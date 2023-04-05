import React, { useState } from 'react';
import './EditUserFormComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../store/users/actions';
import { useNavigate } from 'react-router';

const EditUserFormComponent = () => {

  const user = useSelector((state) => state.UserReducer)
  const userId = useSelector((state) => state.UserReducer.user.id)
  const [showEditForm, setShowEditForm] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    firstname: user.firstname, 
    lastname: user.lastname,
    birthyear:user.birthyear,
    currentcity: user.currentcity,
    occupation: user.occupation,
    userabout: user.userabout,
    useravatar: user.useravatar
  })

  const updateChange = (e) => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value })
    console.log(userData)
  }

  function submitChanges(event){
    if (userId && userData) {
      dispatch(editUser(userId, userData)).then(()=> {
        setShowEditForm(false)
        navigate('/profile')
        alert("has modificado tu perfil con éxito! :D")
      })
    }
    event.preventDefault()
  }

  if (showEditForm === false) {
    return ""
  }

  return (
    <div className="EditUserFormComponent">
    Edit UserForm Component
    <form onSubmit={submitChanges}>
      <fieldset>
        <label>User name:</label>
        <input 
          type='text'
          name='username'
          value={userData.username}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Email:</label>
        <input 
          type='text'
          name='email'
          value={userData.email}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Password:</label>
        <input 
          type='password'
          name='password'
          value={userData.password}
          onChange={updateChange}
        />
      </fieldset>
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
        <label>Last name:</label>
        <input 
          type='text'
          name='lastname'
          value={userData.lastname}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Birthyear:</label>
        <input 
          type='number'
          name='birthyear'
          value={userData.birthyear}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Current city:</label>
        <input 
          type='text'
          name='currentcity'
          value={userData.currentcity}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Occupation:</label>
        <input 
          type='text'
          name='occupation'
          value={userData.occupation}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>About me:</label>
        <input 
          type='text'
          name='userabout'
          value={userData.userabout}
          onChange={updateChange}
        />
      </fieldset>
      <fieldset>
        <label>Profile image:</label>
        <input 
          type='text'
          name='useravatar'
          value={userData.useravatar}
          onChange={updateChange}
        />
      </fieldset>
      <button type='submit'>Update Data</button>
      <button onClick={()=> setShowEditForm(!true)}>Cancelar</button>
    </form>
  </div>
  )
}

export default EditUserFormComponent;
