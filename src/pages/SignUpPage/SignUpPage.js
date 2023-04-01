import { Link } from "react-router-dom";
import SingUpComponent from "../../components/SingUpComponent/SingUpComponent";

export default function SignUpPage() {
    return (
        <div>
            <SingUpComponent></SingUpComponent>
            <p>Already have an account? Please <Link to="/login">Login</Link></p>
        </div>
    )
}