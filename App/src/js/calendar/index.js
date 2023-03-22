import { setCalendar } from "./setCalendar.js";
import { setHeader } from "./setHeader.js";

export const calendarInit = () => {
  const $main = document.getElementById("main");
  const $calendar = document.createElement("div");
  $calendar.id = "calendar";
  $main.appendChild($calendar);

  setHeader();
  setCalendar();
};
