import React from "react";
import PropTypes from "prop-types";

import clothes from "../../examples/clothes.json";
import { jsonParser } from "../../utils";

const JsonParser = ({ classes }) => {
  const json = jsonParser(clothes);
  console.log(json);
  return (
    <div className={classes.root}>
      <h2>Json Parser</h2>
    </div>
  );
};

JsonParser.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default JsonParser;
