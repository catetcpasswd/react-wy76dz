import React from "react";
import ReactDOM from "react-dom";
import { Browser, Route, Switch, } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Home from './components/Home'

const MyRouter = () => {

  const someVar = true;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        render={props => <About {...props} />}
      />
      <Route
        path="/contact"
        render={props => <Contact {...props} extra={someVar} />}
      />
      <Route component={NotFound}/>
    </Switch>
  )
}

export default MyRouter;
