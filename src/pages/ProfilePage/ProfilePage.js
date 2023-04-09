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
    
    const [showEditForm, setShowEditForm] = useState(false)

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
              <div className="userAvatarContainer">
              {user.useravatar ? <img src={user.useravatar} alt={user.name} className="userAvatarImage"></img> : <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png" alt={user.name} width={300}></img>}
              </div>
            <div className="ProfileInfo">
            <h2>{user.username}</h2>
            <p>{user.firstname} {user.lastname}</p>
            <p>{user.email}</p>
            <p>{user.occupation}</p>
            <p>{user.currentcity}</p>
            <p>{user.userabout}</p>
            </div>
            </div>
            <button onClick={logOut} className="third-btn">Logout</button>
            <button onClick={deleteAccount} className="third-btn">Delete account</button>
          <button onClick={() => setShowEditForm(!showEditForm)} className="third-btn">Edit my profile</button>
          {showEditForm === true ? 
          <div>
              <EditUserFormComponent user={user}></EditUserFormComponent>
          </div> : ""}
          <FavoritesComponents></FavoritesComponents>
        </div>
      </section>
    );
}