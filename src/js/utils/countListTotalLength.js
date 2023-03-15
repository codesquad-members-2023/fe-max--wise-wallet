import { inputStore } from "../store/inputStore.js";

export const countListTotalLength = () => {
  return inputStore.listArray.length;
};
