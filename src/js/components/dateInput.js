import { getNumberWithPreZeros, getDateInfo } from "../utils/utils.js";

const dateInput = document.querySelector("#input-date");

const setDateFormat = () => {
  const { year, month, date } = getDateInfo();
  return year + getNumberWithPreZeros(month, 2) + getNumberWithPreZeros(date, 2);
};

const initDefaultDate = () => {
  dateInput.value = setDateFormat();
};

export { initDefaultDate };
