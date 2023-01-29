import {
    ADD_DASLINK_DATA,
    ADD_DASBANNER_DATA,
    GET_DAS_POPTYPE,
} from "./dadata.types";

const INITIAL_STATE = {
    dasLink: [],
    dasBanner: [],
    daPopType: [],
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

        case GET_DAS_POPTYPE:
            return {
                ...state,
                daPopType: action.payload.daPopType,
            };
        default:
            return state;
    }
};

export default reducer;
