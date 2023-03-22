import { $ } from "./dom.js";
import { getDayOfWeek } from "./getDayOfWeek.js";

export const generateListBody = (addedList) => {
  $(".list-by-day-box").insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-by-day">
        <div class="list-body">
        <div class="list-body-info">
            <div class="date-day">
            <span class="date-day-date">${addedList.date.slice(
              4,
              6
            )}월 ${addedList.date.slice(-2)}일</span>
            <span class="date-day-day">${getDayOfWeek(addedList.date)}</span>
            </div>
            <div class="income-expenditure">
            <span>수입</span>
            <span>2,010,580원</span>
            <span>지출</span>
            <span>9,500원</span>
            </div>
        </div>
        <ul class="list-datail-box list-date-${addedList.date}">
        </ul>
        </div>
    </li>
    `
  );
};
