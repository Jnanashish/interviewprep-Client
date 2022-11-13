/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";

// context to handle if admin is login or not
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Home from "./Pages/Homepage/Home";
import JobDesc from "./Components/Jobdescription/Jobdesc";
import { useDispatch } from "react-redux";

// import methods from helper
import { getAdLinkImgData, getAdBannerData } from "./Helper/adapicall";
import {
    addlinkimgdadata,
    adddapoptypedata,
    addbannerdadata,
} from "./Redux/dadata/dadata.actions";
import { gettypeofad } from "./Helper/Jdapicall";

function App() {
    const dispatch = useDispatch();

    // get dalink data and store it in store on mounted
    useEffect(() => {
        getTypeofad();
        getBannerda();
        getlinkimgda();
    }, []);

    const getlinkimgda = () => {
        getAdLinkImgData().then((result) => {
            if (!result) {
                const temp = [];
                dispatch(addlinkimgdadata(temp));
            } else {
                dispatch(addlinkimgdadata(result));
            }
        });
    };

    const getTypeofad = () => {
        gettypeofad().then((result) => {
            if (!result) {
                dispatch(adddapoptypedata("none"));
            } else {
                dispatch(adddapoptypedata(result[0].adpoptype));
            }
        });
    };

    const getBannerda = () => {
        getAdBannerData().then((result) => {
            if (!result) {
                const temp = [];
                dispatch(addbannerdadata(temp));
            } else {
                dispatch(addbannerdadata(result));
            }
        });
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/jd/:id" component={JobDesc} />
                    <Route exact path="*" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
