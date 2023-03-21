import { $ } from "./dom.js";
import { inputStore } from "../store/inputStore.js";
import { DAY_NAME } from "../constants/DAY_NAME.js";
import { getDay } from "./getDay.js";
import { generateListBody } from "./generateListBody.js";
import { generateListDetail } from "./generateListDetail.js";
import { getLocalStorage } from "../store/getLocalStorage.js";

export const renderListByDay = (storedValue) => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );
  // console.log(obj);

  const sortedObjDate = obj
    .filter((el) => el.date.slice(0, 6) === $("#date-input").value.slice(0, 6))
    .sort((a, b) => a.key - b.key);
  // console.log(sortedObjDate);

  const sameDayArray = sortedObjDate.filter(
    (el) => el.date.slice(-2) === $("#date-input").value.slice(-2)
  );

  if (sameDayArray.length === 1) {
    generateListBody(sameDayArray);
    generateListDetail(sameDayArray);
  }
  if (sameDayArray.length > 1) {
    generateListDetail(sameDayArray);
  }

};
