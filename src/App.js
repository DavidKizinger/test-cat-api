import './index.scss'
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
