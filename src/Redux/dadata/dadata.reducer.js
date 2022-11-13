import {
    ADD_DATA,
    ADD_DAPOPTYPE_DATA,
    ADD_BANNERDA_DATA,
} from "./dadata.types";

const INITIAL_STATE = {
    data: [],
    dapoptype: "",
    bannerda: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: action.payload.data,
            };
        case ADD_DAPOPTYPE_DATA:
            return {
                ...state,
                dapoptype: action.payload.dapoptype,
            };
        case ADD_BANNERDA_DATA:
            return {
                ...state,
                bannerda: action.payload.dapoptype,
            };

        default:
            return state;
    }
};

export default reducer;
