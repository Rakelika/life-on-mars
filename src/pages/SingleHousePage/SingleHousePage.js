import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleHouse } from "../../store/houses/actions";
import SingleHouseComponent from "../../components/SingleHouseComponent/SingleHouseComponent";


export default function SingleHousePage() {

    const {singleHouse, houses} = useSelector ((state) => state.HousesReducer)

    const dispatch = useDispatch ();

    const navigate = useNavigate ();

    const params = useParams()

    useEffect(()=>{
        dispatch(getSingleHouse(params.id))
    },[params])

    return (
        <div>
            <div>
                { singleHouse.id > 1 ? (
                <button onClick={() => navigate (`/house/${singleHouse.id-1}`)}>Previous</button>
                ) : null}
                { singleHouse.id < houses.length ?
                    <button onClick={() => navigate (`/house/${singleHouse.id+1}`)}>Next</button>
                : null} 
            </div>
            <SingleHouseComponent></SingleHouseComponent>
        </div>
    )
}