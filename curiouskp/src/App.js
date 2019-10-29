import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.js";
import Splash from "./Pages/Splash.js";
import Admin from "./Pages/Admin.js";
import Schedule from "./Pages/Schedule.js";
import Staff from "./Pages/Staff.js";
import Tuition from "./Pages/Tuition.js";





function App() {
  return (
      <Router>
    
      <Route exact path="/" component ={Splash} />
      <Route exact path="/home" component ={Home} />
      <Route exact path="/tuition" component ={Tuition} />
      <Route exact path="/schedule" component ={Schedule} />
      <Route exact path="/admin" component ={Admin} />
      <Route exact path="/staff" component ={Staff} />

      </Router>


  );
}

export default App;
