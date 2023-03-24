import { $ } from "../../utils/dom.js";
import { storeInputQuery } from "../../store/storeInputQuery.js";

export const listHandler = () => {
  $("#edit-btn").addEventListener("click", storeInputQuery);
};
