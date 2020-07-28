import React from 'react';

import './App.css';

import Login from './pages/Login'
import Index from "./pages/Index"

//引入路由
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <Router>
          <div className="App">
                <div>
                    <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/index" component={Index}></Route>
                </div>
          </div>
      </Router>
  );
}

export default App;
