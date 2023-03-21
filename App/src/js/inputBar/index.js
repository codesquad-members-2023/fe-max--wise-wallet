import { customSelectInit } from "../customSelect/index.js";
import { setDisplay } from "./display/setDisplay.js";
import { setEvent } from "./event/setEvent.js";

export const inputBarInit = () => {
  setDisplay();
  setEvent();
  customSelectInit();
};
