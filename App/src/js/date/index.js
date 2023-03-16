import { mainInit } from "../main/index.js";
import { getDateElements } from "./getDateElements.js";
import { setDate } from "./setDate.js";
import { setNow } from "./setTodayDateInput.js";

export const dateInit = () => {
  const $monthYear = document.getElementById("monthYear");

  $monthYear.addEventListener("click", (e) => {
    const $this = e.target;
    const $arrowBtn = $this.closest(".arrowBtn");

    if ($arrowBtn) {
      $arrowBtn.id === "left-Arrow" ? handleArrowBtn(2) : handleArrowBtn(0);
    }
  });

  setNow();
};

const handleArrowBtn = (num) => {
  const [year, month, month_en] = getDateElements();
  const newDate = new Date(year.innerHTML, month.innerHTML - num);
  setDate([year, month, month_en], newDate);
  mainInit();
};
