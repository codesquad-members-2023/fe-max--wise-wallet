import { $ } from "../utils/dom.js";
import { countListTotalLength } from "../utils/countListTotalLength.js";

export const renderListTotalLength = () => {
  $(".info-total-count").innerText = countListTotalLength() + "건";
};
