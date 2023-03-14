import { $ } from "../utils/dom.js";
import { MONTHS } from "../constants/MONTHS.js";

export const initDateDisplay = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString();
  
  $(".month-year-text p:nth-child(1)").textContent = year;
  $(".month-year-text p:nth-child(2)").textContent = month;
  $(".month-year-text p:nth-child(3)").textContent = MONTHS[month - 1];
};
