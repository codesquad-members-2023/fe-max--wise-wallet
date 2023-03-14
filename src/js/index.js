import { initDefaultDate } from "./components/dateInput.js";
import { addButtonEventListener, initMonthView } from "./components/monthCarousel.js";

document.addEventListener("DOMContentLoaded", () => {
  initMonthView();
  addButtonEventListener();

  initDefaultDate();
});
