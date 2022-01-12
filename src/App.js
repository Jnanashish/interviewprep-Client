import React,{useState} from "react";

// import css
import "./CSS/App.css"


// context to handle if admin is login or not
import { UserContext } from "./Context/userContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// import components
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Email from "./Components/SocialMedia/Email";
import LinkUI from "./Components/JobDesc/LinkUi";
import JobDesc from "./Components/JobDesc/JobDesc";
import EmailAd from "./Components/AD/EmailPop";
import Adpop from "./Components/AD/Adpop";
import AdminPanel from "./Components/Admin/AdminPanel";
import GetAdLinkImg from "./Components/AD/GetAdLinkImg";


function App() {
  // state for user
  const [user, setUser] = useState(null)

  return (
    <Router>
    <UserContext.Provider value = {{user, setUser}}>
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/admin" component={AdminPanel}/>
          <Route exact path = "/signin" component={Signin}/>
          <Route exact path = "/email" component={Email}/>
          <Route exact path = "/new" component={LinkUI}/>
          <Route exact path = "/jd/:id" component={JobDesc}/>
          <Route exact path = "/email/:id" component={EmailAd}/>
          <Route exact path = "/ad/:id" component={Adpop}/>
          <Route exact path = "/test" component={GetAdLinkImg}/>
          <Route exact path = "*" component={Home}/>
        </Switch>
      </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
