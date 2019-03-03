import injectSheet from "react-jss";

import XmlParser from "./XmlParser";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(XmlParser);
export { XmlParser as Component, style };
