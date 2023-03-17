import { countListTotalLength } from "../utils/countListTotalLength.js";

export const initListTotalLength = () => {
  document.querySelector(".info-total-count").innerText =
    countListTotalLength() + "건";
};
