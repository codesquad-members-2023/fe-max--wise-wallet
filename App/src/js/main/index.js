import { setTodayDateInput } from "../date/setTodayDateInput.js";
import { inputBarInit } from "../inputBar/index.js";
import { setMainDisplay } from "./display/setMainDisplay.js";
import { setEvent } from "./event/setEvent.js";

export const mainInit = () => {
  inputBarInit();
  setMainDisplay();
  setEvent();
  setTodayDateInput();
};
