import { combineReducers } from "redux";

// import all the reducer
import linkimgdaReducer from "./dadata/dadata.reducer";

const rootReducer = combineReducers({
    linkimgda: linkimgdaReducer,
});

export default rootReducer;
