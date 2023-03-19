import { getDateElements } from "../date/getDateElements.js";
import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { addComma } from "../utils/addComma.js";
import { setText } from "./setText.js";

export const setCalender = () => {
  const $calendar = document.getElementById("calendar");
  const $table = setTable();
  const $textDiv = setText();
  $calendar.appendChild($table);
  $calendar.appendChild($textDiv);
};

const getDate = () => {
  const [year, month] = getDateElements();
  const dayOfWeek = new Date(
    Number(year.textContent),
    Number(month.textContent) - 1,
    1
  ).getDay();

  const lastDay = new Date(
    Number(year.textContent),
    Number(month.textContent),
    0
  ).getDate();
  return [year.textContent, month.textContent, dayOfWeek, lastDay];
};

const setTable = () => {
  const [year, month, dayOfWeek, lastDay] = getDate();
  const $table = document.createElement("table");
  const group = setGroup(getLocalStorage());

  let td = "";
  for (let i = 0; i < 35; i++) {
    let dayText = "";
    const day = i - dayOfWeek + 1;
    let [$income, $expenditure, $total] = [];
    const date = `${year}${String(month).padStart(2, 0)}${String(day).padStart(
      2,
      0
    )}`;

    if (group.hasOwnProperty(date)) {
      [$income, $expenditure, $total] = setDetails(group[date]);
    }
    if (i >= dayOfWeek && lastDay >= day) {
      dayText = day;
    }
    td += `<td>
        <div class="info_wrapper">
            <div class="detalis">
                ${$income ? $income : ""}
                ${$expenditure ? $expenditure : ""}
                ${$total ? $total : ""}
            </div>
            <div class="number">${dayText}</div>   
        </div>
      </td>`;

    if (i > 0 && i % 7 === 6) {
      const $tr = document.createElement("tr");
      $tr.innerHTML = td;
      $table.appendChild($tr);
      td = "";
    }
  }
  return $table;
};

const setDetails = (array) => {
  // 수입
  let income = 0;
  // 지출
  let expenditure = 0;
  array.forEach((e) => {
    e.isPositive ? (income += e.price) : (expenditure += e.price);
  });

  const $incomeDiv =
    income === 0 ? "" : `<div class="Secondary-cyan">${addComma(income)}</div>`;
  const $expenditureDiv =
    expenditure === 0
      ? ""
      : `<div class="secondary-red">${addComma(expenditure)}</div>`;
  const $totalDiv = `<div class="primary">${addComma(
    income - expenditure
  )}</div>`;

  return [$incomeDiv, $expenditureDiv, $totalDiv];
};

const setGroup = (array) => {
  const group = {};
  array.forEach((obj) => {
    if (group.hasOwnProperty(obj.date)) {
      group[obj.date].push(obj);
    } else {
      group[obj.date] = [obj];
    }
  });
  return group;
};
