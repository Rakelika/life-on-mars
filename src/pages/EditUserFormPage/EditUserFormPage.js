import { Link } from "react-router-dom";
import EditUserFormComponent from "../../components/EditUserFormComponent/EditUserFormComponent";

export default function EditUserFormPage() {

    return (
         <div className='Container PageRegularPadding'>
            <Link to="/profile">Back to my profile</Link>
            <EditUserFormComponent></EditUserFormComponent>
        </div>
    )
}