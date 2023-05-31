import React from 'react';
import PropTypes from 'prop-types';
import './ProfileUpdatePreviewComponent.scss';
import { useSelector } from 'react-redux';
import noavatar from "../../assets/no-avatar.svg"

const ProfileUpdatePreviewComponent = ({ values }) => {

  const { user } = useSelector((state) => {return state.UserReducer});


  return (
  <section className="ProfileUpdatePreviewComponent">
    <article className='EditUserPreviewCard'>
      <div className="userAvatarContainer">
        {values.useravatar ? <img src={values.useravatar} alt="profileimg" /> : user.useravatar ? <img src={user.useravatar} alt="profileimg" /> : <img src={noavatar} alt={user.name} className="userNoAvatarImage"></img>}
      </div>
      {values.username ? <h3>{values.username}</h3> : <h3>{user.username}</h3> }
      <p>Email: {values.email ? <span>{values.email}</span> : <span>{user.email}</span>}</p>
      <p>Current city: {values.currentcity ? <span>{values.currentcity}</span> : <span>{user.currentcity}</span>}</p>
      <p>Occupation: {values.occupation ? <span>{values.occupation}</span> : <span>{user.occupation}</span>}</p>
      <p>About me: {values.userabout ? <span>{values.userabout}</span> : <span>{user.userabout}</span>}</p>
    </article>
  </section>
  )
};

ProfileUpdatePreviewComponent.propTypes = {};

ProfileUpdatePreviewComponent.defaultProps = {};

export default ProfileUpdatePreviewComponent;
