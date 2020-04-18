import React from "react";
import ReactDOM from "react-dom";
import { Browser, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import Error from './components/Error';

function App(props) {

  return(
    <BrowserRouter>
        <Traverse />
        <NavBar />
    </BrowserRouter>
  );
  
}


const  Traverse = () => {
  
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route component={Error}/>
      </Switch>
    </main>
  );
}
export default App;