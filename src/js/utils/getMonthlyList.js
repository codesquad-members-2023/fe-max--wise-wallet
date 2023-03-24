import { $ } from "../utils/dom.js";
export const getMonthlyList = () => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );
  const sortedObj = obj.sort((a, b) => b.key - a.key);
  const displayedYear = $(".header-year").textContent;
  const displayedMonth = $(".header-month").textContent.padStart(2, "0");
  const displayedYearMonth = `${displayedYear}${displayedMonth}`;
  const objByDisplayedDate = sortedObj.filter(
    (el) => el.date.slice(0, 6) === displayedYearMonth
  );
  return objByDisplayedDate;
};
