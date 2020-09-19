import React from "react";
import logo from "./logo.svg";
import Navbar from "./Navbar";
// import react router
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navbar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
