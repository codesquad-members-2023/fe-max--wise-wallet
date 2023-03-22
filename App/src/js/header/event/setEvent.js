import { calendarInit } from "../../calendar/index.js";
import { chartInit } from "../../chart/index.js";
import { getDateElements } from "../../date/getDateElements.js";
import { setDate } from "../../date/setDate.js";
import { mainInit } from "../../main/index.js";

export const setEvent = () => {
  const $monthYear = document.getElementById("monthYear");
  const $tab = document.getElementById("tab");

  $monthYear.addEventListener("click", (e) => {
    const $main = document.getElementById("main");
    const $this = e.target;
    const $arrowBtn = $this.closest(".arrowBtn");
    const currentPage = $main.getAttribute("data-page");

    if ($arrowBtn) {
      while ($main.firstChild) {
        $main.removeChild($main.firstChild);
      }
      handleArrowBtn($arrowBtn.id, currentPage);
    }
  });

  $tab.addEventListener("click", (e) => {
    const $main = document.getElementById("main");
    const $this = e.target;
    const targetId = $this.closest("button").id;

    while ($main.firstChild) {
      $main.removeChild($main.firstChild);
    }

    switch (targetId) {
      case "tab_doc":
        mainInit();
        break;

      case "tab_calendar":
        calendarInit();
        break;

      case "tab_chart":
        chartInit();
        break;

      default:
    }

    $main.setAttribute("data-page", targetId.replace("tab_", ""));
  });
};

const handleArrowBtn = (targetId, currentPage) => {
  const $main = document.getElementById("main");
  editDate(targetId);

  switch (currentPage) {
    case "doc":
      mainInit();
      break;

    case "calendar":
      calendarInit();
      break;

    case "chart":
      chartInit();
      break;

    default:
  }
};

const editDate = (targetId) => {
  const num = targetId === "left-Arrow" ? 2 : 0;
  const [year, month, month_en] = getDateElements();
  const newDate = new Date(year.innerHTML, month.innerHTML - num);
  setDate([year, month, month_en], newDate);
};
