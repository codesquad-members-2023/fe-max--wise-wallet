import { $ } from "./dom.js";
import { countListTotalLength } from "./countListTotalLength.js";

export const render = () => {
  document.querySelector(".info-total-count").innerText =
    countListTotalLength() + "건";
};
