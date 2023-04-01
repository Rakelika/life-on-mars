import { combineReducers } from "redux"
import UserReducer from "./users/reducer";
import HousesReducer from "./houses/reducer";

const rootReducer = combineReducers({
    UserReducer,
    HousesReducer
});

export default rootReducer