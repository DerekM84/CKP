import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.js";
import Splash from "./Pages/Splash.js";
import Admin from "./Pages/Admin.js";




function App() {
  return (
      <Router>
    
      <Route exact path="/" component ={Splash} />
      <Route exact path="/home" component ={Home} />
      <Route exact path="/admin" component ={Admin} />

      </Router>


  );
}

export default App;
