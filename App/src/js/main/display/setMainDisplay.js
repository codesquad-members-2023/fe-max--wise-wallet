import { getLocalStorage } from "../../localStorage/getLocalStorage.js";
import { setList } from "./setList.js";
import { setListMain } from "./setListMain.js";
import { setTh } from "./setTh.js";

export const setMainDisplay = () => {
  const listData = getLocalStorage();
  const th = setTh(listData);
  const list = setList(listData);
  setListMain({ th, list });
};
