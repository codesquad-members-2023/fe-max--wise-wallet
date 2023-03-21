import { $ } from "./dom.js";
import { generateListBody } from "./generateListBody.js";
import { generateListDetail } from "./generateListDetail.js";

export const renderListByDay = (storedValue) => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );

  const objDate = obj
    .filter((el) => el.date.slice(0, 6) === $("#date-input").value.slice(0, 6));

  const sameDayArray = objDate.filter(
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
