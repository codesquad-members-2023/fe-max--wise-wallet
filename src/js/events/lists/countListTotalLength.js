import { getMonthlyList } from "../../utils/getMonthlyList.js";

export const countListTotalLength = () => {
  // 월별 개수를 구하는 것으로 바꿔야함
  return getMonthlyList().length;
  return localStorage.length;
};
