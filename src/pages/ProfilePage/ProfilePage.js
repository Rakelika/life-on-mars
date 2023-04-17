import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, doLogout } from "../../store/users/actions";
import FavoritesComponents from "../../components/FavoritesComponents/FavoritesComponents";
import NasaPictureDayComponent from "../../components/NasaPictureDayComponent/NasaPictureDayComponent";
import "./profilePageStyles.scss"
import noavatar from "../../assets/no-avatar.svg"
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete my account',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteUser(user.id)).then(()=> {
            dispatch(doLogout())
            Swal.fire('Your account has been deleted', '', 'success')
            navigate('/')
          });
        }
      })
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
              {user.useravatar ? <img src={user.useravatar} alt={user.name} className="userAvatarImage"></img> : <img src={noavatar} alt={user.name} className="userNoAvatarImage"></img>}
              </div>
            </header>
            <div className="ProfileRow">
                <div className="ProfileCol">
                  <h1>{user.username}</h1>
                  <p>{user.email}</p>
                  <div className="ProfileButtonsContainer">
                  <Link to={`/edit-user-profile`} className='profile-third-btn '>Edit my profile</Link>
                    <button onClick={logOut} className="profile-third-btn">Logout</button>
                    <button onClick={deleteAccount} className="profile-third-btn">Delete account</button>
                </div>
                </div>
                <div className="ProfileInfo">
                  <h3>{user.firstname} {user.lastname}</h3>
                  <p><span>Current city: </span>{user.currentcity}</p>
                  <p><span>Occupation: </span>{user.occupation}</p>
                  <p><span>About me: </span>{user.userabout}</p>
                </div>
          </div>
          </div>
          <FavoritesComponents></FavoritesComponents>
          <NasaPictureDayComponent></NasaPictureDayComponent>
        </div>
      </section>
    );
}