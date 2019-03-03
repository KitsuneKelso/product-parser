import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { TAG_UNDEFINED } from "../../../utils";

const TableRow = ({ col1, col2, col3, col4, classes }) => {
  const classNames = val =>
    cn(classes.tableItem, { [classes.dataMissing]: val === TAG_UNDEFINED });
  const rowItem = val => <div className={classNames(val)}>{val}</div>;
  return (
    <div className={classes.tableRow}>
      {rowItem(col1)}
      {rowItem(col2)}
      {rowItem(col3)}
      {rowItem(col4)}
    </div>
  );
};

TableRow.propTypes = {
  col1: PropTypes.string.isRequired,
  col2: PropTypes.string.isRequired,
  col3: PropTypes.string.isRequired,
  col4: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
  // header is used in the stylesheet
  header: PropTypes.bool
};

TableRow.defaultProps = {
  header: false
};

export default TableRow;
