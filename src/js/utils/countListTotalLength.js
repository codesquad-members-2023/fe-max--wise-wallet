import { inputStore } from "../store/inputStore.js";

export const countListTotalLength = () => {
  return localStorage.length
  // return inputStore.listArray.length;
};
