import { $ } from "../utils/dom.js";
import { countListTotalLength } from "../events/lists/countListTotalLength.js";

export const renderListTotalLength = () => {
  $(".info-total-count").innerText = countListTotalLength() + "건";
};
