import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Shop from './components/Shop';

const NavBar = () => {
  return(    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>
  )
}

export default NavBar;
