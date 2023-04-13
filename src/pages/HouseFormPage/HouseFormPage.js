import { useEffect } from 'react'
import HouseFormComponent from '../../components/HouseFormComponent/HouseFormComponent'
import { getSingleFavorite } from '../../store/houses/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function HouseFormPage() {

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getSingleFavorite(params.id))
    }, [])


    return (
        <div className='Container PageRegularPadding'>
            <Link to="/profile">Back to my profile</Link>
            {/* <h2>Let's customize!</h2>
            <p>Customize your Martian home with our form. Edit the details of your favorite house and make it uniquely yours</p>
            <p>You can choose the number of bedrooms and bathrooms, select if you want a garden, and even rename your house with a unique and special name that suits your Martian home.</p> */}
            <HouseFormComponent></HouseFormComponent>
        </div>
    )
}