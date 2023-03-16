import { getDateElements } from "./getDateElements.js";
import { setDate } from "./setDate.js";

export const setTodayDateInput = () => {
  setDate(getDateElements(), new Date());
  const date = new Date();
  const yearText = date.getFullYear();
  const monthText = String(date.getMonth() + 1);
  const dayText = String(date.getDate());

  document.getElementById("input_date").value = parseInt(
    `${yearText}${monthText.padStart(2, "0")}${dayText.padStart(2, "0")}`
  );
};
