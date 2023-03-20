import { getLocalStorage } from "../../localStorage/getLocalStorage.js";
import { setInputbar } from "./setInputbar.js";
import { setList } from "./setList.js";
import { setListMain } from "./setListMain.js";
import { setTh } from "./setTh.js";

export const setDisplay = () => {
  setInputbar();

  const value = getLocalStorage();
  const th = setTh(value);
  const list = setList(value);
  setListMain({ th, list });
};
