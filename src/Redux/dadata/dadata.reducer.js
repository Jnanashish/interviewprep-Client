import { ADD_DASLINK_DATA, ADD_DASBANNER_DATA } from "./dadata.types";

const INITIAL_STATE = {
    dasLink: [],
    dasBanner: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DASLINK_DATA:
            return {
                ...state,
                dasLink: action.payload.dasLink,
            };

        case ADD_DASBANNER_DATA:
            return {
                ...state,
                dasBanner: action.payload.dasBanner,
            };

        default:
            return state;
    }
};

export default reducer;
