import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { doLogout } from "../../store/users/actions";

export default function ProfilePage() {

    const { user, loadingUser } = useSelector((state) => {
        console.log("profile",state);
        return state.UserReducer;
      });
    const dispatch = useDispatch()

    function logOut() {
        dispatch(doLogout())
    }

    if (loadingUser) {
        return <div>Cargando...</div>;
      }

    return (
        <div>
        {user && user.id ? (
          <div>
          <p>Hola {user.username} has inciado sesión correctamente</p>
          <p>Tu email es: {user.email}</p>
          <img src={user.useravatar} alt={user.name} width={300}></img>
          <p><Link onClick={logOut}>Logout</Link></p>
          </div>
        ) : (
          <div>No estás logeado</div>
        )}
      </div>
    );
}