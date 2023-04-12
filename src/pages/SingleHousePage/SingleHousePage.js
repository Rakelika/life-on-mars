import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleHouse } from "../../store/houses/actions";
import SingleHouseComponent from "../../components/SingleHouseComponent/SingleHouseComponent";
import './SingleHousePage.scss';
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";


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
            <div className="Container PagitatorHouses">
                { singleHouse.id > 1 ? (
                <button 
                    className="paginator-btn" 
                    onClick={() => navigate (`/house/${singleHouse.id-1}`)}>
                        <FaCaretLeft/>
                </button>
                ) : null}
                { singleHouse.id < 12 ?
                <button className="paginator-btn" 
                    onClick={() => navigate (`/house/${singleHouse.id+1}`)}>
                        <FaCaretRight/>
                </button>
                : null} 
            </div>
            <SingleHouseComponent></SingleHouseComponent>
        </div>
    )
}