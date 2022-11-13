import {
    ADD_DATA,
    ADD_DAPOPTYPE_DATA,
    ADD_BANNERDA_DATA,
} from "./dadata.types";

export const addlinkimgdadata = (data) => {
    return {
        type: ADD_DATA,
        payload: {
            data,
        },
    };
};

export const adddapoptypedata = (dapoptype) => {
    return {
        type: ADD_DAPOPTYPE_DATA,
        payload: {
            dapoptype,
        },
    };
};

export const addbannerdadata = (dapoptype) => {
    return {
        type: ADD_BANNERDA_DATA,
        payload: {
            dapoptype,
        },
    };
};
