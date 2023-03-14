import { countListTotalCount } from "../utils/countListTotalCount.js";

export const initListTotalCount = () => {
  document.querySelector(".info-total-count").innerText =
    countListTotalCount() + "건";
};
