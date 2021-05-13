import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Register from './pages/Register';
export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
