import React from "react";
import PropTypes from "prop-types";

import clothes from "../../examples/clothes.json";
import { jsonParser } from "../../utils";

const JsonParser = () => {
  const json = jsonParser(clothes);
  console.log(json);
  return (
    <div>
      <h2>Json Parser</h2>
    </div>
  );
};

export default JsonParser;
