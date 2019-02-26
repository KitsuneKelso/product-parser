import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ col1, col2, col3, col4, classes }) => (
  <div className={classes.tableRow}>
    <div className={classes.tableItem}>{col1}</div>
    <div className={classes.tableItem}>{col2}</div>
    <div className={classes.tableItem}>{col3}</div>
    <div className={classes.tableItem}>{col4}</div>
  </div>
);

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
