import { setMainDisplay } from "./display/setMainDisplay.js";
import { setEvent } from "./event/setEvent.js";

export const mainInit = () => {
  setMainDisplay();
  setEvent();
};
