import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.js";
import Splash from "./Pages/Splash.js";
import Admin from "./Pages/Admin.js";
import Schedule from "./Pages/Schedule.js";
import Resources from "./Pages/Resources.js";
import Curriculum from "./Pages/Curriculum.js";





function App() {
  return (
      <Router>
    
      <Route exact path="/" component ={Splash} />
      <Route exact path="/home" component ={Home} />
      <Route exact path="/curriculum" component ={Curriculum} />
      <Route exact path="/schedule" component ={Schedule} />
      <Route exact path="/admin" component ={Admin} />
      <Route exact path="/resources" component ={Resources} />

      </Router>


  );
}

export default App;
