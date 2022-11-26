import { ADD_DASLINK_DATA, ADD_DASBANNER_DATA } from "./dadata.types";

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
