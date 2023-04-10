import { combineReducers } from "redux"
import UserReducer from "./users/reducer";
import HousesReducer from "./houses/reducer";
import NasaReducer from "./nasa/reducer";

const rootReducer = combineReducers({
    UserReducer,
    HousesReducer,
    NasaReducer
});

export default rootReducer