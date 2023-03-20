import { customSelectInit } from "./customSelect/index.js";
import { setTodayDateInput } from "./date/setTodayDateInput.js";
import { headerInit } from "./header/index.js";
import { inputBarInit } from "./inputBar/index.js";
import { mainInit } from "./main/index.js";

const init = () => {
  headerInit();
  inputBarInit();
  mainInit();
  setTodayDateInput();
  customSelectInit();
};

window.addEventListener("DOMContentLoaded", init);
