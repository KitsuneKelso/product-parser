import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Table } from "..";
import { jsonParser, xmlParser, csvParser } from "../../utils";
import { json, xml, csv } from "../../examples";

const JsonParser = ({ classes }) => {
  const [format, setFormat] = useState("JSON");

  const parsedClothes = {
    JSON: jsonParser(json),
    XML: xmlParser(xml),
    CSV: csvParser(csv)
  };

  const button = type => (
    <button
      className={cn(classes.button, { [classes.active]: format === type })}
      onClick={() => setFormat(type)}
    >
      {type}
    </button>
  );

  const buttons = (
    <div className={classes.buttonsContainer}>
      <span>Select file format to parse from:</span>
      <div className={classes.buttonsRow}>
        {button("JSON")}
        {button("XML")}
        {button("CSV")}
      </div>
    </div>
  );

  const colors = {
    JSON: "red",
    XML: "green",
    CSV: "blue"
  };

  return (
    <div className={classes.root}>
      {buttons}
      <Table clothes={parsedClothes[format]} color={colors[format]} />
    </div>
  );
};

JsonParser.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default JsonParser;
