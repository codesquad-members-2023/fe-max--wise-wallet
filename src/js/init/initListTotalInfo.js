import { renderListTotalLength } from "../view/renderListTotalLength.js";
import { renderTotalIncomeExpenditure } from "../view/renderTotalIncomeExpenditure.js";

export const initListTotalInfo = () => {
  renderTotalIncomeExpenditure()
  renderListTotalLength();
};
