import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return(
    <div>
      <Greet greeting='hey you'/>
    </div>
  )
  
  
}


function Greet({greeting:hi}) {
  
  return <h1>{hi} React Router</h1>;
}
export default App;