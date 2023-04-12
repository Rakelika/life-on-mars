import { Link } from "react-router-dom";
import LoginComponent from "../../components/LoginComponent/LoginComponent";

export default function LoginPage() {
    return (
        <div className="FullWidthContainer">
            <div className="LeftCol">
                <header className="SignUpHeader">
                <h1 className='h1SectionTitle'>Welcome back to Life on Mars!</h1>
                <p>Please enter your credentials to access your account.</p>
                </header>
                <LoginComponent></LoginComponent>
                <p>Don't have an account yet? Please <Link to="/signup">SignUp</Link></p>
            </div>
            <div className="RightCol">
            </div>
        </div>
    )
}