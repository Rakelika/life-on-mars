import { useEffect } from 'react'
import HouseFormComponent from '../../components/HouseFormComponent/HouseFormComponent'
import { getSingleFavorite } from '../../store/houses/actions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function HouseFormPage() {

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getSingleFavorite(params.id))
    }, [])


    return (
        <div>
            House Form Page
            <HouseFormComponent></HouseFormComponent>
        </div>
    )
}