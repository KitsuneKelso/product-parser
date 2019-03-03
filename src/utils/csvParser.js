import { sortBySize } from ".";

const filterEmptyValues = arr => arr.filter(a => a.length > 0);

const csvParser = csv => {
  const values = [...csv.split("\n")];
  const keys = values.shift().split(",");
  const clothes = filterEmptyValues(values).map(val => {
    const garment = {};
    filterEmptyValues(val.split(",")).map((v, i) => (garment[keys[i]] = v));
    return garment;
  });
  return sortBySize(clothes);
};

export default csvParser;
