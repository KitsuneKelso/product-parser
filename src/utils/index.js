export { default as jsonParser } from "./jsonParser";
export { default as xmlParser } from "./xmlParser";

const SIZE_ORDER = ["XS", "S", "M", "L", "XL"];

const bySize = (a, b) => {
  if (SIZE_ORDER.indexOf(a.size) > SIZE_ORDER.indexOf(b.size)) {
    return 1;
  }
  if (SIZE_ORDER.indexOf(a.size) < SIZE_ORDER.indexOf(b.size)) {
    return -1;
  }
  return 0;
};

export const sortBySize = clothes => clothes.sort(bySize);
