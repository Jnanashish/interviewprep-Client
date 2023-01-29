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
import {
    getDasLinkDataAPI,
    getAdBannerData,
    getAdPopType,
} from "./Helper/adapicall";

import {
    addDASLinkData,
    addDASBannerData,
    getDASPopUpType,
} from "./Redux/dadata/dadata.actions";

function App() {
    const dispatch = useDispatch();

    // get DAS data and store it in store on mounted
    useEffect(() => {
        getDasLinkData();
        getDasBannerData();
        getDASPopTypeData();
    }, []);

    // get DAS Link data from API
    const getDasLinkData = () => {
        getDasLinkDataAPI().then((res) => {
            if (!res) {
                const temp = [];
                dispatch(addDASLinkData(temp));
            } else {
                dispatch(addDASLinkData(res));
            }
        });
    };

    // get DAS banner data from API
    const getDasBannerData = () => {
        getAdBannerData().then((res) => {
            if (!res) {
                const temp = [];
                dispatch(addDASBannerData(temp));
            } else {
                dispatch(addDASBannerData(res));
            }
        });
    };

    const getDASPopTypeData = () => {
        getAdPopType().then((res) => {
            if (!res) {
                const temp = [];
                dispatch(getDASPopUpType(temp));
            } else {
                dispatch(getDASPopUpType(res));
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
