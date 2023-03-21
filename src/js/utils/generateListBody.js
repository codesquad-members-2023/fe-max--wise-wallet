import { $ } from "./dom.js";

export const generateListBody = (sameDayArray) => {

  document.querySelector(".list-by-day-box").insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-by-day">
        <div class="list-body">
        <div class="list-body-info">
            <div class="date-day">
            <span class="date-day-date">${
              $("#date-input").value.slice(4,6)
            }월 ${$("#date-input").value.slice(-2)}일</span>
            <span class="date-day-day">금</span>
            </div>
            <div class="income-expenditure">
            <span>수입</span>
            <span>2,010,580원</span> <!-- {계산함수} -->
            <span>지출</span>
            <span>9,500원</span> <!-- {계산함수} -->
            </div>
        </div>
        <ul class="list-datail-box list-date-${sameDayArray[0].date}">
        </ul>
        </div>
    </li>
    `
  );
};
