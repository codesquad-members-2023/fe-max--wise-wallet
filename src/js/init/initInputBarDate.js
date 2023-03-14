import { $ } from "../utils/dom.js";

export const initInputBarDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;
  $("#date-input").value = formattedDate;
};
