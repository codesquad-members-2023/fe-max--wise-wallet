import { $ } from "./dom.js";
import { getDayOfWeek } from "./getDayOfWeek.js";

export const generateListBody = (sameDayArray) => {
  // const year = $("#date-input").value.slice(0, 4);
  // const month = $("#date-input").value.slice(4, 6);
  // const day = $("#date-input").value.slice(-2);
  // const makeDate = new Date(`${year}-${month}-${day}`);
  // const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
  //   makeDate.getDay()
  // ];


  document.querySelector(".list-by-day-box").insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-by-day">
        <div class="list-body">
        <div class="list-body-info">
            <div class="date-day">
            <span class="date-day-date">${$("#date-input").value.slice(
              4,
              6
            )}월 ${$("#date-input").value.slice(-2)}일</span>
            <span class="date-day-day">${getDayOfWeek()}</span>
            </div>
            <div class="income-expenditure">
            <span>수입</span>
            <span>2,010,580원</span>
            <span>지출</span>
            <span>9,500원</span>
            </div>
        </div>
        <ul class="list-datail-box list-date-${sameDayArray[0].date}">
        </ul>
        </div>
    </li>
    `
  );
};
