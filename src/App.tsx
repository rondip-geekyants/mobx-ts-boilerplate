import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { Todo } from "./containers";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Revolve</h1>
        </header>
        <p className="App-intro">A boilerplate in making</p>

        <div>
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
