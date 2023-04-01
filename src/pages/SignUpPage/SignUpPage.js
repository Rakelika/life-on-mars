import { Link } from "react-router-dom";

export default function SignUpPage() {
    return (
        <div>
            <p>Aquí irá el formulario para registrarse</p>
            <p>Already have an account? Please <Link to="/login">Login</Link></p>
        </div>
    )
}