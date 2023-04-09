import { Link } from "react-router-dom";
import SingUpComponent from "../../components/SingUpComponent/SingUpComponent";
import './signUpPageStyles.scss'

export default function SignUpPage() {
    return (
        <div className="FullWidthContainer">
            <div className="LeftCol">
                <header className="SignUpHeader">
                <h1 className='h1SectionTitle'>Welcome to our sign up page!</h1>
                <p>To get started, please fill out the form below with your information. We'll use this information to create your account and personalize your experience on our website.</p>
                </header>
                <SingUpComponent></SingUpComponent>
                <p>Already have an account? Please <Link to="/login">Login</Link></p>
            </div>
            <div className="RightCol">
            </div>
        </div>
    )
}