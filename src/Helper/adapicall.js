import { API } from "../Backend";

// get das link data
export const getDasLinkDataAPI = () => {
    return fetch(`${API}/sda/link/get`, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const getAdLinkImgData = () => {
    return fetch(`${API}/sda/linkimg/get`, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const getAdBannerData = () => {
    return fetch(`${API}/sda/banner/get`, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const getAdPopType = () => {
    return fetch(`${API}/showadpop/get`, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const countBannerClick = (id) => {
    fetch(`${API}/sda/banner/count/${id}`, { method: "PATCH" });
};

export const countAdLinkClick = (id) => {
    fetch(`${API}/sda/link/count/${id}`, { method: "PATCH" });
};

export const countAdLinkImgClick = (id) => {
    fetch(`${API}/sda/linkimg/count/${id}`, { method: "PATCH" });
};
