import { getDate } from "./getDate.js";
import { setDate } from "./setDate.js";
import { setNow } from "./setNow.js";

export const dateInit = () => {
  const left_arrow = document.getElementById("left-Arrow");
  const right_arrow = document.getElementById("right-Arrow");

  left_arrow.addEventListener("click", () => {
    const [year, month, month_en] = getDate();
    const newDate = new Date(year.innerHTML, month.innerHTML - 2);
    setDate([year, month, month_en], newDate);
  });

  right_arrow.addEventListener("click", () => {
    const [year, month, month_en] = getDate();
    const newDate = new Date(year.innerHTML, month.innerHTML);
    setDate([year, month, month_en], newDate);
  });

  setNow();
};
