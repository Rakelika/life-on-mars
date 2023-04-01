import { useSelector } from "react-redux"

export default function ProfilePage() {

    const { user, loadingUser } = useSelector((state) => {
        console.log("profile",state);
        return state.UserReducer;
      });

      if (loadingUser) {
        return <div>Cargando...</div>;
      }

    return (
        <div>
        {user && user.id ? (
          <div>Hola {user.username} has inciado sesión correctamente</div>
        ) : (
          <div>No estás logeado</div>
        )}
      </div>
    );
}