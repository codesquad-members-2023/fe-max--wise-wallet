import { $ } from "../../utils/dom.js";

export const selectCategoryList = (e) => {
  if (e.target.nodeName === "BUTTON") {
    $(".category-select-head").innerText = e.target.innerText;
    $(".category-select-head").classList.remove("on");
  }
};
