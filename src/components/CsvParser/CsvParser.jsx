import React from "react";
import PropTypes from "prop-types";

import { Table } from "..";
import { csvParser } from "../../utils";

const CsvParser = ({ classes }) => {
  const csv = csvParser(clothes);

  return (
    <div className={classes.root}>
      <h2>CSV Parser</h2>
      <Table clothes={csv} />
    </div>
  );
};

CsvParser.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default CsvParser;

const clothes = `type,size,brand,color
T-shirt,L,Tiger,White
Shirt,M,Riley,Blue
Sweater,S,H&M,Black
Hoodie,XL,FILA,Black,
T-shirt,XS,Calvin Klein,Grey
Tanktop,L,Vans,White
Shirt,M,Adidas,Pink
Sweatpants,L,Gymshark,Grey
Sweater,M,Ullared,Red
T-shirt,L,Nike,White
`;
