import { calendarInit } from "../../calendar/index.js";
import { getDateElements } from "../../date/getDateElements.js";
import { setDate } from "../../date/setDate.js";
import { setMainDisplay } from "../../main/display/setMainDisplay.js";
import { mainInit } from "../../main/index.js";

export const setEvent = () => {
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
    const targetId = $this.closest("button").id;

    while ($main.firstChild) {
      $main.removeChild($main.firstChild);
    }

    // 현재 화면 이 어떤 화면인지 확인 필요..
    // 그 확인에 따른 화살표 버튼 맞게 실행ㄴ
    if (targetId === "tab_doc") {
      inputBarInit();
      mainInit();
    }
    if (targetId === "tab_calendar") {
      calendarInit();
    }
  });
};

const handleArrowBtn = (command) => {
  const num = command === "left" ? 2 : 0;
  const [year, month, month_en] = getDateElements();
  const newDate = new Date(year.innerHTML, month.innerHTML - num);
  setDate([year, month, month_en], newDate);
  setMainDisplay();
};
