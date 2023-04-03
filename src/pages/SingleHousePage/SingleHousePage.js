import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleHouse } from "../../store/houses/actions";
import SingleHouseComponent from "../../components/SingleHouseComponent/SingleHouseComponent";

export default function SingleHousePage() {

    const params = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSingleHouse(params.id))
    },[])

    return (
        <div>
            <SingleHouseComponent></SingleHouseComponent>
        </div>
    )
}