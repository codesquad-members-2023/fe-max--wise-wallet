import { calendarInit } from "../calendar/index.js";
import { draw } from "../main/draw.js";
import { mainInit } from "../main/index.js";
import { getDateElements } from "./getDateElements.js";
import { setDate } from "./setDate.js";
import { setTodayDateInput } from "./setTodayDateInput.js";

export const dateInit = () => {
  const $monthYear = document.getElementById("monthYear");
  const $tab = document.getElementById("tab");

  $monthYear.addEventListener("click", (e) => {
    const $this = e.target;
    const $arrowBtn = $this.closest(".arrowBtn");

    if ($arrowBtn) {
      $arrowBtn.id === "left-Arrow"
        ? handleArrowBtn("left")
        : handleArrowBtn("right");
    }
  });

  $tab.addEventListener("click", (e) => {
    const $main = document.getElementById("main");
    const $this = e.target;
    const id = $this.closest("button").id;

    $main.innerHTML = "";
    if (id === "tab_doc") {
      draw();
      mainInit();
    }
    if (id === "tab_calendar") {
      calendarInit();
    }
  });
  setDate(getDateElements(), new Date());
  setTodayDateInput();
};

const handleArrowBtn = (num) => {
  num = num === "left" ? 2 : 0;
  const [year, month, month_en] = getDateElements();
  const newDate = new Date(year.innerHTML, month.innerHTML - num);
  setDate([year, month, month_en], newDate);
  mainInit();
};

const checkMain = () => {};
