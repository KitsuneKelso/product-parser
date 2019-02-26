import React from "react";
import PropTypes from "prop-types";

import { Table } from "..";
import clothes from "../../examples/clothes.json";
import { jsonParser } from "../../utils";

const JsonParser = ({ classes }) => {
  const json = jsonParser(clothes);

  return (
    <div className={classes.root}>
      <h2>Json Parser</h2>
      <Table clothes={json} />
    </div>
  );
};

JsonParser.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default JsonParser;
