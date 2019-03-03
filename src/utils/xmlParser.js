import { sortBySize, TAG_UNDEFINED } from ".";

const parseXml = xmlInput => {
  try {
    if (window && window.DOMParser) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "text/xml");
      const elements = xmlDoc.getElementsByTagName("garment");
      const clothes = Array.from(elements).map(garment => {
        const getNodeValue = tag => {
          const element = garment.getElementsByTagName(tag);
          return element.length > 0
            ? element[0].firstChild.nodeValue
            : TAG_UNDEFINED;
        };
        return {
          type: getNodeValue("type"),
          size: getNodeValue("size"),
          brand: getNodeValue("brand"),
          color: getNodeValue("color")
        };
      });
      return sortBySize(clothes);
    } else {
      throw new Error("Unable to parse input: DOMParser not available");
    }
  } catch (e) {
    console.error(e);
  }
};

export default parseXml;
