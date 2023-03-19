import { calendarInit } from "./calendar/index.js";
import { customSelectInit } from "./customSelect/index.js";
import { dateInit } from "./date/index.js";
import { inputBarInit } from "./inputBar/index.js";
import { draw } from "./main/draw.js";
import { mainInit } from "./main/index.js";

const init = () => {
  draw();
  dateInit();
  inputBarInit();
  customSelectInit();
  mainInit();
};

window.addEventListener("DOMContentLoaded", init);
