import { combineReducers } from "redux";

// import all the reducer
import dasReducer from "./dadata/dadata.reducer";

const rootReducer = combineReducers({
    dasReducer: dasReducer,
});

export default rootReducer;
