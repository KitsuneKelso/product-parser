import React from "react";

import { JsonParser, XmlParser, CsvParser } from ".";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>Hello world! Let's parse some files!</p>
      <JsonParser />
      <XmlParser />
      <CsvParser />
    </header>
  </div>
);

export default App;
