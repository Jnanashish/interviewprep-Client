import {
    ADD_DASLINK_DATA,
    ADD_DASBANNER_DATA,
    GET_DAS_POPTYPE,
} from "./dadata.types";

// add das link data
export const addDASLinkData = (dasLink) => {
    return {
        type: ADD_DASLINK_DATA,
        payload: {
            dasLink,
        },
    };
};

// add das banner data
export const addDASBannerData = (dasBanner) => {
    return {
        type: ADD_DASBANNER_DATA,
        payload: {
            dasBanner,
        },
    };
};

export const getDASPopUpType = (daPopType) => {
    return {
        type: GET_DAS_POPTYPE,
        payload: {
            daPopType,
        },
    };
};
