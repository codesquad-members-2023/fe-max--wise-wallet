import { headerInit } from "./header/index.js";
import { mainInit } from "./main/index.js";

const init = () => {
  headerInit();
  mainInit();
};

window.addEventListener("DOMContentLoaded", init);
