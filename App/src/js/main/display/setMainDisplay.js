import { getLocalStorage } from "../../localStorage/getLocalStorage.js";
import { setList } from "./setList.js";
import { setListMain } from "./setListMain.js";
import { setTh } from "./setTh.js";

export const setMainDisplay = () => {
  const value = getLocalStorage();
  const th = setTh(value);
  const list = setList(value);
  setListMain({ th, list });
};
