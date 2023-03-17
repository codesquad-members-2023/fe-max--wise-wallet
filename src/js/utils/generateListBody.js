import { $ } from "./dom.js";
import { inputStore } from "../store/inputStore.js";

export const generateListBody = () => {
  const listArray = inputStore.listArray;
  document.querySelector(".list-by-day-box").insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-by-day">
        <div class="list-body">
        <div class="list-body-info">
            <div class="date-day">
            <span class="date-day-date">${
              $(".header-month").textContent
            }월 ${listArray[listArray.length - 1].date.slice(-2)}일</span>
            <span class="date-day-day">금</span>
            </div>
            <div class="income-expenditure">
            <span>수입</span>
            <span>2,010,580원</span>
            <span>지출</span>
            <span>9,500원</span>
            </div>
        </div>
        <ul class="list-datail-box">
        </ul>
        </div>
    </li>
    `
  );
};
