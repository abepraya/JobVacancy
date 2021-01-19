import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import HomeComponent from "./MenuComponent/HomeComponent";
// import NameList from "./Component/JobComponent/NameList";
import Formulir from "./Component/MenuComponent/Formulir";
// import NavbarComponent from "./Component/MenuComponent/NavbarComponent";
import JobIndex from "./Component/JobComponent/JobIndex";
import HomeComponent from "./Component/MenuComponent/HomeComponent";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Formulir}/>
      <Route path="/" component={JobIndex}/>
      <Route exact path="/" component={HomeComponent}/>
    </Switch>
    </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById("root")
);
