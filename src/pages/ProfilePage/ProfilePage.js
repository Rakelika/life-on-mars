import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, doLogout } from "../../store/users/actions";
import EditUserFormComponent from "../../components/EditUserFormComponent/EditUserFormComponent";
import { useState } from "react";
import FavoritesComponents from "../../components/FavoritesComponents/FavoritesComponents";
import "./profilePageStyles.scss"

export default function ProfilePage() {

    const { user, loadingUser } = useSelector((state) => {
        console.log("profile",state);
        return state.UserReducer;
      });

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logOut() {
        dispatch(doLogout())
    }

    function deleteAccount() {
      const confirmDelete = window.confirm('Wait... are you sure you want to delete your account?');
      if (confirmDelete) {
        dispatch(deleteUser(user.id)).then(()=> {
          dispatch(doLogout())
          navigate('/')
          alert("Oh no :( Your account has been deleted")
        });
      }
    }

    if (loadingUser) {
        return <div>Cargando...</div>;
      }
      
    return (
      <section>
          <div className="ProfilePageMainBanner"></div>
          <div className="Container">
            <div className="ProfilePageUserInfoContainer">
            <header className="ProfilePageUserHeader">
              <div className="userAvatarContainer">
              {user.useravatar ? <img src={user.useravatar} alt={user.name} className="userAvatarImage"></img> : <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png" alt={user.name} width={300}></img>}
              </div>
            </header>
            <div className="ProfileRow">
                <div className="ProfileCol">
                  <h1>{user.username}</h1>
                  <p>{user.email}</p>
                </div>
                <div className="ProfileCol ProfileInfo">
                  <h3>{user.firstname} {user.lastname}</h3>
                  <p><span>Occupation: </span>{user.occupation}</p>
                  <p><span>Current city: </span>{user.currentcity}</p>
                  <p><span>About me: </span>{user.userabout}</p>
                  </div>
            <div className="ProfileButtonsContainer">
            <button onClick={logOut} className="third-btn">Logout</button>
            <button onClick={deleteAccount} className="third-btn">Delete account</button>
            <Link to={`/edit-user-profile`} className='secondary-btn centerText'>Edit my profile</Link>
          </div>
          </div>
          </div>
          <FavoritesComponents></FavoritesComponents>
        </div>
      </section>
    );
}