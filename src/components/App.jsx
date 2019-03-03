import React from "react";

import { JsonParser, XmlParser } from ".";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>Hello world! Let's parse some files!</p>
      <JsonParser />
      <XmlParser />
    </header>
  </div>
);

export default App;
