import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

import { Browser, Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import PrivateComponent1 from './components/PrivateComponent1';
import PrivateComponent2 from './components/PrivateComponent2';
import MyPrivateRouter from './MyPrivateRouter'

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
    console.log([decode(token),decode(refreshToken)])
    return true;
  } catch (error) {
    return false;
  }
}

function MyPrivateRouter({ component: Component, ...rest }) {
  console.log(component);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
      <PrivateRoute path="/private1/:id?" exact component={PrivateComponent1}/>
      <PrivateRoute path="/private2" exact component={PrivateComponent2}/>
    </Switch>
  </BrowserRouter>
);