import { renderListTotalLength } from "../view/renderListTotalLength.js";
import { renderTotalIncomeExpenditure } from "../utils/renderTotalIncomeExpenditure.js";

export const initListTotalInfo = () => {
  renderTotalIncomeExpenditure()
  renderListTotalLength();
};
