import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, doLogout } from "../../store/users/actions";
import EditUserFormComponent from "../../components/EditUserFormComponent/EditUserFormComponent";
import { useState } from "react";

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
        <div>
        {user && user.id ? (
          <div>
          <p>Hola {user.username} has inciado sesión correctamente</p>
          <p>{user.firstname} {user.lastname}</p>
          <p>{user.birthyear}</p>
          <p>{user.currentcity}</p>
          <p>{user.occupation}</p>
          <p>{user.userabout}</p>
          <p>{user.email}</p>
          <img src={user.useravatar} alt={user.name} width={300}></img>
          <p><Link onClick={logOut}>Logout</Link></p>
          <p><button onClick={deleteAccount}>Delete account</button></p>
          </div>
        ) : (
          <div>No estás logeado</div>
        )}
        <button onClick={() => setShowEditForm(true)}>Edit my profile</button>
        {showEditForm === true ? 
        <div>
            <EditUserFormComponent user={user}></EditUserFormComponent>
        </div> : ""}
      </div>
    );
}