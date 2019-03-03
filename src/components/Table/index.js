import injectSheet from "react-jss";

import Table from "./Table";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(Table);
export { Table as Component, style };
