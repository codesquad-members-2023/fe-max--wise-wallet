import { inputStore } from "../store/inputStore.js";

export const countListTotalCount = () => {
  return inputStore.listArray.length;
};
