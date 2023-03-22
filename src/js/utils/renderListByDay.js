import { $ } from "./dom.js";
import { generateListBody } from "./generateListBody.js";
import { generateListDetail } from "./generateListDetail.js";

export const renderListByDay = () => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );

  const displayedYear = $(".header-year").textContent;
  const displayedMonth = $(".header-month").textContent.padStart(2, "0");
  const displayedYearMonth = `${displayedYear}${displayedMonth}`;
  const objByDisplayedDate = obj.filter(
    (el) => el.date.slice(0, 6) === displayedYearMonth
  );

  const objDate = obj
    .filter((el) => el.date.slice(0, 6) === $("#date-input").value.slice(0, 6));

  const sameDayArray = objDate.filter(
    (el) => el.date.slice(-2) === $("#date-input").value.slice(-2)
  );

  // 다른날짜로 바꾸고 같은 날짜가 하나 초과일때 추가하면 이전의 내용이 추가됨..
  // 지금 추가하려는 거 하나가, 화면상의 연월과 다르면 추가되면 안됨
  // if(){

  // }

  if (sameDayArray.length === 1) {
    generateListBody(sameDayArray);
    generateListDetail(sameDayArray);
  }
  if (sameDayArray.length > 1) {
    generateListDetail(sameDayArray);
  }

};
