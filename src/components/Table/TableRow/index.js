import injectSheet from "react-jss";

import TableRow from "./TableRow";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(TableRow);
export { TableRow as Component, style };
