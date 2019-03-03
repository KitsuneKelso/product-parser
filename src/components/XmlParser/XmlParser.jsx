import React from "react";
import PropTypes from "prop-types";

import { Table } from "..";
import { xmlParser } from "../../utils";

const XmlParser = ({ classes }) => {
  const xml = xmlParser(clothes);

  return (
    <div className={classes.root}>
      <h2>Xml Parser</h2>
      <Table clothes={xml} />
    </div>
  );
};

XmlParser.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default XmlParser;

const clothes = `<?xml version="1.0" encoding="UTF-8" ?>
<clothes>
	<garment>
		<type>T-shirt</type>
		<size>L</size>
		<brand>Tiger</brand>
		<color>White</color>
	</garment>
	<garment>
		<type>Shirt</type>
		<size>M</size>
		<brand>Riley</brand>
		<color>Blue</color>
	</garment>
	<garment>
		<type>Sweater</type>
		<size>S</size>
		<brand>H&amp;M</brand>
		<color>Black</color>
	</garment>
	<garment>
		<type>Hoodie</type>
		<size>XL</size>
		<brand>FILA</brand>
		<color>Black</color>
	</garment>
	<garment>
		<type>T-shirt</type>
		<size>XS</size>
		<color>Grey</color>
	</garment>
	<garment>
		<type>Tanktop</type>
		<size>L</size>
		<brand>Vans</brand>
		<color>White</color>
	</garment>
	<garment>
		<type>Shirt</type>
		<size>M</size>
		<brand>Adidas</brand>
		<color>Pink</color>
	</garment>
	<garment>
		<type>Sweatpants</type>
		<size>L</size>
		<brand>Gymshark</brand>
		<color>Grey</color>
	</garment>
	<garment>
		<type>Sweater</type>
		<size>M</size>
		<brand>Ullared</brand>
		<color>Red</color>
	</garment>
	<garment>
		<type>T-shirt</type>
		<size>L</size>
		<brand>Nike</brand>
		<color>White</color>
	</garment>
</clothes>	
`;
