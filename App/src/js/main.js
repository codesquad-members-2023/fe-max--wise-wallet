import { customSelectInit } from "./customSelect/index.js";
import { dateInit } from "./date/index.js";
import { inputBarInit } from "./inputBar/index.js";
import { localStorageInit } from "./localStorage/index.js";
import { mainInit } from "./main/index.js";

const init = () => {
  dateInit();
  inputBarInit();
  customSelectInit();
  localStorageInit();
  mainInit();
};

window.addEventListener("DOMContentLoaded", init);
