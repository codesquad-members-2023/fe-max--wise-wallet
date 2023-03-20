import { setDisplay } from "./display/setDisplay.js";
import { setEvent } from "./event/setEvent.js";

export const mainInit = () => {
  setDisplay();
  setEvent();
};
