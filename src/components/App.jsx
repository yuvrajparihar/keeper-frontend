import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./Home";


// https://my-keeper-server.herokuapp.com/

function App() {
 

  

 

  return (
    <div id="page-container">
      <div id="content-wrap">
       
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
   
    </div>
  );
}

export default App;

