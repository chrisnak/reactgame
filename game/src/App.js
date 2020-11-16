import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect} from "react-router-dom";

//Pages
import MainPage from "./pages";
import GamePage from "./pages/game";

class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/game"component={GamePage}/>
        </Switch>
      </Router>
    );
  }  
}

export default App;