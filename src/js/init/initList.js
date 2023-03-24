import { listHandler } from "../events/lists/index.js";
import { renderMonthlyList } from "../view/renderMonthlyList.js";

export const initList = () => {
  renderMonthlyList();
  listHandler();
};
