import { countListTotalLength } from "../utils/countListTotalLength.js";

export const initListTotalCount = () => {
  document.querySelector(".info-total-count").innerText =
  countListTotalLength() + "건";
};
