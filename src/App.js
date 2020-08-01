import React, { Component } from "react";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <h2>It is learning process</h2>
        <h3>This is for the daily Commit</h3>
      </div>
    );
  }
}

export default App;
