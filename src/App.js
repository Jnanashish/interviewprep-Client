import React,{useState} from "react";

// import css
import "./App.css"

// context to handle if admin is login or not
import { UserContext } from "./Context/userContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import components
import Home from "./Pages/Homepage/Home";
import Signin from "./Pages/Signinpage/Signin"
import Email from "./Components/Emailmini/Email"
import JobDesc from "./Components/Jobdesc/Jobdesc";
import Emailpop from "./Components/Emailpop/Emailpop"
import Bannerpop from "./Components/Bannerpop/Bannerpop";
import Adminpanel from "./Pages/Adminpanel/Adminpanel"


function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
    <UserContext.Provider value = {{user, setUser}}>
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/admin" component={Adminpanel}/>
          <Route exact path = "/signin" component={Signin}/>
          <Route exact path = "/email" component={Email}/>
          <Route exact path = "/jd/:id" component={JobDesc}/>
          <Route exact path = "/email/:id" component={Emailpop}/>
          <Route exact path = "/ad/:id" component={Bannerpop}/>
          <Route exact path = "*" component={Home}/>
        </Switch>
      </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
