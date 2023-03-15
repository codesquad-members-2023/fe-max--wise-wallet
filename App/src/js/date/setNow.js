import { getDate } from "./getDate.js";
import { setDate } from "./setDate.js";

export const setNow = () => {
  setDate(getDate(), new Date());
  const date = new Date();
  const year_Text = date.getFullYear();
  const month_Text = String(date.getMonth() + 1);
  const day_Text = String(date.getDate());

  document.getElementById("input_date").value = parseInt(
    `${year_Text}${month_Text.padStart(2, "0")}${day_Text.padStart(2, "0")}`
  );
};
