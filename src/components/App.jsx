import React from "react";

import { JsonParser } from ".";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>Hello world! Let's parse some files!</p>
      <JsonParser />
    </header>
  </div>
);

export default App;
