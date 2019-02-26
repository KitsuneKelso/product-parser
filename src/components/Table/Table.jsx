import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";

const Table = ({ clothes }) => {
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
    <>
      <TableRow header col1="Brand" col2="Type" col3="Size" col4="Color" />
      {clothes && clothes.map(item => renderTableRow(item))}
    </>
  );
};

Table.propTypes = {
  clothes: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Table;
