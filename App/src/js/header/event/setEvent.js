import { calendarInit } from "../../calendar/index.js";
import { chartInit } from "../../chart/index.js";
import { getDateElements } from "../../date/getDateElements.js";
import { setDate } from "../../date/setDate.js";
import { mainInit } from "../../main/index.js";

export const setEvent = () => {
  clickArrowBtn();
  clcikTabMenu();
};

const clickArrowBtn = () => {
  const $monthYear = document.getElementById("monthYear");

  $monthYear.addEventListener("click", ({ target }) => {
    const $main = document.getElementById("main");
    const $arrowBtn = target.closest(".arrowBtn");
    const currentPage = $main.getAttribute("data-page");

    if ($arrowBtn) {
      removeChildAll($main);
      handleArrowBtn($arrowBtn.id, currentPage);
    }
  });
};

const clcikTabMenu = () => {
  const $tab = document.getElementById("tab");

  $tab.addEventListener("click", ({ target }) => {
    const targetId = target.closest("button").id;
    const $main = document.getElementById("main");

    removeChildAll($main);
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
  const monthOffset = targetId === "left-Arrow" ? -2 : 0;
  editDate(monthOffset);

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

const editDate = (monthOffset) => {
  const [year, month, month_en] = getDateElements();
  const monthIndex = Number(month.textContent) + monthOffset;
  const newDate = new Date(year.textContent, monthIndex);
  setDate([year, month, month_en], newDate);
};

const removeChildAll = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
