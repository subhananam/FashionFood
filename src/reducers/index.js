import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";

const allReducers = combineReducers({
    cart: cartReducer,
    auth: authReducer
})

export default allReducers;