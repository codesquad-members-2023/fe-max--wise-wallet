import { $ } from "./dom.js";
import { countListTotalLength } from "./countListTotalLength.js";

export const renderListTotalLength = () => {
  $(".info-total-count").innerText = countListTotalLength() + "건";
};
