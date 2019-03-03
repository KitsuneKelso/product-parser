import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";

const Table = ({ clothes, classes }) => {
  const renderTableRow = item => (
    <TableRow
      key={`${item.brand}_${item.size}_${item.color}`}
      col1={item.brand}
      col2={item.type}
      col3={item.size}
      col4={item.color}
    />
  );

  return (
    <div className={classes.root}>
      <TableRow header col1="Brand" col2="Type" col3="Size" col4="Color" />
      {clothes && clothes.map(item => renderTableRow(item))}
    </div>
  );
};

Table.propTypes = {
  clothes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  classes: PropTypes.shape().isRequired,
  // color is used in the stylesheet
  color: PropTypes.string.isRequired
};

export default Table;
