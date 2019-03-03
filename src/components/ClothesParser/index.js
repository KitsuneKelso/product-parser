import injectSheet from "react-jss";

import ClothesParser from "./ClothesParser";
import style from "./style";

const enhance = injectSheet(style);

export default enhance(ClothesParser);
export { ClothesParser as Component, style };
