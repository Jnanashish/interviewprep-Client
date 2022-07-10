import React from "react";

// import css
import "./App.css"

// context to handle if admin is login or not
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Home from "./Pages/Homepage/Home";
import Email from "./Components/Emailmini/Email"
import JobDesc from "./Components/Jobdesc/Jobdesc";
import Emailpop from "./Components/Emailpop/Emailpop"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/email" component={Email}/>
          <Route exact path = "/jd/:id" component={JobDesc}/>
          <Route exact path = "/email/:id" component={Emailpop}/>
          <Route exact path = "*" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
