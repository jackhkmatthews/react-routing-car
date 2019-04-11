import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./common/home.component.jsx";
import About from "./common/about.component.jsx";
import Car from "./car/car.component.jsx";
import Main from "./common/main.component.jsx";

render(
  <BrowserRouter>
    <Route path="/">
      <Route path="/" component={Home} />
      <Route path="/cars" component={Car} />
      <Route path="/about" component={About} />
    </Route>
  </BrowserRouter>,
  document.getElementById("container")
);
