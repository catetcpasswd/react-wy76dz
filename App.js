import React from "react";
import ReactDOM from "react-dom";
import { Browser, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import MyRouter from './MyRouter'
import MyPrivateRouter from './MyRouter'

function App(props) {
  return (
    <BrowserRouter>
      <MyPrivateRouter/>
    </BrowserRouter>
  );
}



export default App;