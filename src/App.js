import React,{useState} from "react";

// import css
import "./CSS/App.css"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// context to handle if admin is login or not
import { UserContext } from "./Context/userContext"


// import components
import Admin from "./Components/Admin/Admin"
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Email from "./Components/SocialMedia/Email";
import ResHome from "./Components/Resource/Home"
import Books from "./Components/Resource/Books";
import LinkUI from "./Components/New UI/LinkUI";
import JobDesc from "./Components/New UI/JobDesc";

function App() {
  // state for user
  const [user, setUser] = useState(null)

  return (
    <Router>
    <UserContext.Provider value = {{user, setUser}}>
    <div className="App">
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/admin" component={Admin}/>
        <Route exact path = "/signin" component={Signin}/>
        <Route exact path = "/email" component={Email}/>
        <Route exact path = "/res" component={ResHome}/>
        <Route exact path = "/book" component={Books}/>
        <Route exact path = "/new" component={LinkUI}/>
        <Route exact path = "/jd" component={JobDesc}/>
        <Route exact path = "*" component={Home}/>
      </Switch>
    </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
