import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Info from './pages/Info.js';
import './assets/App.css';

function App () {

  return (
    

    <div className="App">

      <BrowserRouter>
          <Route path='/' exact>
            <Home />
          </Route>
        <Switch>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/Register">
            <Register />
        </Route>
        <Route path="/Info">
            <Info />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


