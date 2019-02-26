import injectSheet from "react-jss";

import JsonParser from "./JsonParser";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(JsonParser);
export { JsonParser as Component, style };
