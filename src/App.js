import React, { Component } from "react"; // Component is put in curly braces because it is optional
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Main from "./components/Main";

// import react router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
