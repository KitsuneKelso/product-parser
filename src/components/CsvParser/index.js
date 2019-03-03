import injectSheet from "react-jss";

import CsvParser from "./CsvParser";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(CsvParser);
export { CsvParser as Component, style };
