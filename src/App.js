import React from "react";
import logo from "./logo.png";
import "./App.css";
import GetSelectionHandler from "./components/selectText";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GetSelectionHandler />
        </header>
      </div>
    );
  }
}

export default App;
