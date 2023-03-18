import { Element } from "../Element.js";
import {
  dateformat,
  dateOneMonth,
  monthDateToDateArr,
  nextMonth,
  ONE_DAY_TIME,
  previousMonth,
} from "../util.js";
import { NEXT_MONTH, NEXT_YEAR, PREVIOUS_MONTH, PREVIOUS_YEAR } from "./SVG.js";

function DatePickerInputView(current) {
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const date = current.getDate();
  return `
    <div class="date">
      <div class="group">
        <input
          class="item"
          type="text"
          id="date"
          aria-describedby="id-description-1"
          aria-label="일자 입력"
          value="${year}${month < 10 ? "0" + month : month}${
    date < 10 ? "0" + date : date
  }" />
      </div>
    </div>
  `;
}

function DatePickerDialogHeaderView(year, monthName) {
  return `
    <div class="header">
      <button
        type="button"
        class="prev-year"
        aria-label="작년"
        tabindex="-1">
        ${PREVIOUS_YEAR}
      </button>

      <button
        type="button"
        class="prev-month"
        aria-label="저번달"
        tabindex="-1">
        ${PREVIOUS_MONTH}
      </button>

      <h2
        id="id-grid-label"
        class="month-year"
        aria-live="polite"
        tabindex="-1">
        ${monthName} ${year}
      </h2>

      <button
        type="button"
        class="next-month"
        aria-label="다음달"
        tabindex="-1">
        ${NEXT_MONTH}
      </button>

      <button
        type="button"
        class="next-year"
        aria-label="내년"
        tabindex="-1">
        ${NEXT_YEAR}
      </button>
    </div>
  `;
}

function DayTableRowView() {
  return `
    <tr>
      <th scope="col" abbr="일요일">일</th>
      <th scope="col" abbr="월요일">월</th>
      <th scope="col" abbr="화요일">화</th>
      <th scope="col" abbr="수요일">수</th>
      <th scope="col" abbr="목요일">목</th>
      <th scope="col" abbr="금요일">금</th>
      <th scope="col" abbr="토요일">토</th>
    </tr>
  `;
}

function DateTableDataView(current) {
  if (!current) return `<td class="disabled" tabindex="-1"></td>`;
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const date = current.getDate();
  return `
    <td tabindex="-1" data-date="${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : date
  }">${date}</td>
  `;
}

function WeekArrToTableRowView(weekArr) {
  const innerHTML = weekArr.map(DateTableDataView).join("");
  return `<tr>${innerHTML}</tr>`;
}

function DateArrToTableInnerView(current) {
  const month = dateOneMonth(current);
  const dateArr = monthDateToDateArr(month);
  return dateArr.map(WeekArrToTableRowView).join("");
}

function DatePickerDialogTableView(current) {
  const dayTableRowHTML = DayTableRowView();
  const tableInnerHTML = DateArrToTableInnerView(current);
  return `
    <table
      class="dates"
      role="grid"
      aria-labelledby="id-grid-label">
      <thead>
      ${dayTableRowHTML}
      </thead>
      <tbody>
      ${tableInnerHTML}
      </tbody>
    </table>
    `;
}

function DatePickerDialogView(current) {
  const year = current.getFullYear();
  const monthName = current.toLocaleString("en-US", { month: "long" });
  const headerHTML = DatePickerDialogHeaderView(year, monthName);
  return `
    <div
      id="id-datepicker"
      class="datepicker-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="날짜를 선택해주세요">
      ${headerHTML}
      <div class="table-wrap">
      </div>
      <div class="dialog-ok-cancel-group">
        <button class="dialog-button" value="cancel">
          취소
        </button>
        <button class="dialog-button" value="ok">입력</button>
      </div>
      <div class="dialog-message" aria-live="polite"></div>
    </div>
  `;
}

export class DatePicker extends Element {
  constructor() {
    super();
    this.date = null;
  }
  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.id = "myDatepicker";
    this.domNode.className = "datepicker";

    const current = new Date();

    const inputHTML = DatePickerInputView(current);
    const dialogHTML = DatePickerDialogView(current);
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <div id="myDatepicker" class="datepicker">
          ${inputHTML}
          ${dialogHTML}
        </div>
      `
    );

    const dialog = this.domNode.querySelector("[role='dialog']");

    dialog.addEventListener("focusout", this.cancelDialog.bind(this));

    const input = this.domNode.querySelector("INPUT");
    input.addEventListener("click", this.dialogActiveHandler.bind(this));
    input.addEventListener("keydown", this.dialogActiveHandler.bind(this));

    const prevYearButton = this.domNode.querySelector(".prev-year");
    const prevMonthButton = this.domNode.querySelector(".prev-month");
    const monthYear = this.domNode.querySelector(".month-year");
    const nextMonthButton = this.domNode.querySelector(".next-month");
    const nextYearButton = this.domNode.querySelector(".next-year");

    prevYearButton.addEventListener("click", this.toPrevYear.bind(this));
    prevYearButton.addEventListener(
      "keydown",
      this.prevYearButtonKeyDownHandler.bind(this)
    );

    prevMonthButton.addEventListener("click", this.toPrevMonth.bind(this));
    prevMonthButton.addEventListener(
      "keydown",
      this.prevMonthButtonKeyDownHandler.bind(this)
    );

    monthYear.addEventListener("keydown", this.monthYearHandler.bind(this));

    nextMonthButton.addEventListener("click", this.toNextMonth.bind(this));
    nextMonthButton.addEventListener(
      "keydown",
      this.nextMonthButtonKeyDownHandler.bind(this)
    );

    nextYearButton.addEventListener("click", this.toNextYear.bind(this));
    nextYearButton.addEventListener(
      "keydown",
      this.nextYearButtonKeyDownHandler.bind(this)
    );

    const cancelButton = this.domNode.querySelector('button[value="cancel"]');
    const okButton = this.domNode.querySelector('button[value="ok"]');

    cancelButton.addEventListener("click", this.cancelDialog.bind(this));
    cancelButton.addEventListener(
      "keydown",
      this.cancelButtonKeyDownHandler.bind(this)
    );
    okButton.addEventListener("click", this.insertDate.bind(this));
    okButton.addEventListener(
      "keydown",
      this.okButtonKeyDownHandler.bind(this)
    );
  }
}

DatePicker.prototype.insertDate = function () {
  const dialog = this.domNode.querySelector("[role='dialog']");
  dialog.className = "datepicker-dialog";
  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const input = this.domNode.querySelector("INPUT");
  input.value = td.dataset.date.replace(/\-/g, "");
  this.system.setInputDataValue("date", input.value);
  input.focus();
};

DatePicker.prototype.cancelDialog = function (e) {
  setTimeout(() => {
    if (document.activeElement.tagName === "BODY") {
      const dialog = this.domNode.querySelector("[role='dialog']");
      dialog.className = "datepicker-dialog";
      const input = this.domNode.querySelector("INPUT");
      input.focus();
    }
  }, 1);
};

DatePicker.prototype.dialogActiveHandler = function (e) {
  if (e.type === "keydown") {
    if (e.key !== "Enter" && e.key !== " ") {
      return;
    }
  }

  const dialog = this.domNode.querySelector("[role='dialog']");
  const input = this.domNode.querySelector("INPUT");
  dialog.className = "datepicker-dialog active";
  const tableWrap = this.domNode.querySelector(".table-wrap");
  const current = new Date();
  tableWrap.innerHTML = DatePickerDialogTableView(current);

  const dataDateTableDatas = tableWrap.querySelectorAll("td[data-date]");

  const datepicker = this;

  dataDateTableDatas.forEach((tableData) => {
    tableData.addEventListener(
      "keydown",
      this.tableDataKeydownHandler.bind(this)
    );
    tableData.addEventListener("click", (e) => {
      dialog.className = "datepicker-dialog";
      input.value = e.target.dataset.date.replace(/\-/g, "");
      datepicker.system.setInputDataValue("date", input.value);
    });
  });

  const td = tableWrap.querySelector(`td[data-date="${dateformat(current)}"]`);
  td.setAttribute("tabindex", "0");
  td.focus();
};

DatePicker.prototype.tableDataKeydownHandler = function (e) {
  const { target, key, shiftKey } = e;
  e.preventDefault();
  const from = new Date(target.dataset.date);
  const dialog = this.domNode.querySelector("[role='dialog']");
  const input = this.domNode.querySelector("INPUT");
  switch (key) {
    case "ArrowLeft":
      this.datePick(from, new Date(from.getTime() - ONE_DAY_TIME));
      break;
    case "ArrowUp":
      this.datePick(from, new Date(from.getTime() - ONE_DAY_TIME * 7));
      break;
    case "ArrowRight":
      this.datePick(from, new Date(from.getTime() + ONE_DAY_TIME));
      break;
    case "ArrowDown":
      this.datePick(from, new Date(from.getTime() + ONE_DAY_TIME * 7));
      break;
    case "Tab":
      if (shiftKey) {
        const monthYear = this.domNode.querySelector(".month-year");
        monthYear.focus();
        return;
      }
      const cancelButton = dialog.querySelector('button[value="cancel"]');
      cancelButton.focus();
      break;
    case "Enter":
    case "Space":
      dialog.className = "datepicker-dialog";
      const currentTd = dialog.querySelector(
        `td[data-date="${dateformat(from)}"]`
      );
      input.value = currentTd.dataset.date.replace(/\-/g, "");
      this.system.setInputDataValue("date", input.value);
      input.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.datePick = function (from, to) {
  const currentTd = this.domNode.querySelector(
    `td[data-date="${dateformat(from)}"]`
  );
  currentTd.setAttribute("tabindex", "-1");
  if (
    from.getFullYear() === to.getFullYear() &&
    from.getMonth() === to.getMonth()
  ) {
    const nextTd = this.domNode.querySelector(
      `td[data-date="${dateformat(to)}"]`
    );
    nextTd.setAttribute("tabindex", "0");
    nextTd.focus();

    return;
  }

  const dialog = this.domNode.querySelector("[role='dialog']");
  const dialogHeaderH2 = dialog.querySelector(".header h2");
  const year = to.getFullYear();
  const monthName = to.toLocaleString("en-US", { month: "long" });
  dialogHeaderH2.textContent = `${monthName} ${year}`;
  const tableWrap = dialog.querySelector(".table-wrap");
  tableWrap.innerHTML = DatePickerDialogTableView(to);
  const dataDateTableDatas = tableWrap.querySelectorAll("td[data-date]");

  dataDateTableDatas.forEach((tableData) => {
    tableData.addEventListener(
      "keydown",
      this.tableDataKeydownHandler.bind(this)
    );
    tableData.addEventListener("click", this.insertDate.bind(this));
  });

  const nextTd = tableWrap.querySelector(`td[data-date="${dateformat(to)}"]`);
  nextTd.setAttribute("tabindex", "0");
  nextTd.focus();
};

DatePicker.prototype.toPrevYear = function (e) {
  const { target } = e;
  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const from = new Date(td.dataset.date);
  let to = new Date(from.getTime() - ONE_DAY_TIME * 365);
  if (from.getMonth() !== to.getMonth()) {
    to = new Date(from.getTime() + ONE_DAY_TIME);
  }
  to = dateOneMonth(to);
  this.datePick(from, to);
  target.focus();
};

DatePicker.prototype.toPrevMonth = function (e) {
  const { target } = e;
  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const from = new Date(td.dataset.date);
  let to = previousMonth(from);
  this.datePick(from, to);
  target.focus();
};

DatePicker.prototype.toNextMonth = function (e) {
  const { target } = e;
  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const from = new Date(td.dataset.date);
  let to = nextMonth(from);
  this.datePick(from, to);
  target.focus();
};

DatePicker.prototype.toNextYear = function (e) {
  const { target } = e;
  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const from = new Date(td.dataset.date);
  let to = new Date(from.getTime() + ONE_DAY_TIME * 365);
  if (from.getMonth() !== to.getMonth()) {
    to = new Date(to.getTime() - ONE_DAY_TIME);
  }
  to = dateOneMonth(to);
  console.log(from);
  this.datePick(from, to);
  target.focus();
};

DatePicker.prototype.prevYearButtonKeyDownHandler = function (e) {
  const { key } = e;
  const prevMonthButton = this.domNode.querySelector(".prev-month");
  const nextYearButton = this.domNode.querySelector(".next-year");
  switch (key) {
    case "ArrowLeft":
      nextYearButton.focus();
      return;
    case "ArrowRight":
      prevMonthButton.focus();
      return;
    case "Enter":
    case "Space":
      this.toPrevYear(e);
      return;
    case "Tab":
      const td = this.domNode.querySelector(`td[tabindex="0"]`);
      td.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.prevMonthButtonKeyDownHandler = function (e) {
  const { key } = e;
  const prevYearButton = this.domNode.querySelector(".prev-year");
  const monthYear = this.domNode.querySelector(".month-year");
  switch (key) {
    case "ArrowLeft":
      prevYearButton.focus();
      return;
    case "ArrowRight":
      monthYear.focus();
      return;
    case "Enter":
    case "Space":
      this.toPrevMonth(e);
      return;
    case "Tab":
      const td = this.domNode.querySelector(`td[tabindex="0"]`);
      td.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.monthYearHandler = function (e) {
  const { key } = e;
  const prevMonthButton = this.domNode.querySelector(".prev-month");
  const nextMonthButton = this.domNode.querySelector(".next-month");
  switch (key) {
    case "ArrowLeft":
      prevMonthButton.focus();
      return;
    case "ArrowRight":
      nextMonthButton.focus();
      return;
    case "Tab":
      const td = this.domNode.querySelector(`td[tabindex="0"]`);
      td.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.nextMonthButtonKeyDownHandler = function (e) {
  const { key } = e;
  const monthYear = this.domNode.querySelector(".month-year");
  const nextYearButton = this.domNode.querySelector(".next-year");
  switch (key) {
    case "ArrowLeft":
      monthYear.focus();
      return;
    case "ArrowRight":
      nextYearButton.focus();
      return;
    case "Enter":
    case "Space":
      this.toNextMonth(e);
      return;
    case "Tab":
      const td = this.domNode.querySelector(`td[tabindex="0"]`);
      td.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.nextYearButtonKeyDownHandler = function (e) {
  const { key } = e;
  const prevYearButton = this.domNode.querySelector(".prev-year");
  const nextMonthButton = this.domNode.querySelector(".next-month");
  switch (key) {
    case "ArrowLeft":
      nextMonthButton.focus();
      return;
    case "ArrowRight":
      prevYearButton.focus();
      return;
    case "Enter":
    case "Space":
      this.toNextYear(e);
      return;
    case "Tab":
      const td = this.domNode.querySelector(`td[tabindex="0"]`);
      td.focus();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.cancelButtonKeyDownHandler = function (e) {
  e.preventDefault();
  const { key, shiftKey } = e;

  const td = this.domNode.querySelector(`td[tabindex="0"]`);
  const okButton = this.domNode.querySelector('button[value="ok"]');

  switch (key) {
    case "Tab":
      if (shiftKey) {
        td.focus();
        return;
      }
      okButton.focus();
      return;
    case "Enter":
    case "Space":
      this.cancelDialog();
      return;
    case "Escape":
      this.cancelDialog();
  }
};

DatePicker.prototype.okButtonKeyDownHandler = function (e) {
  const { key } = e;

  const cancelButton = this.domNode.querySelector('button[value="cancel"]');
  switch (key) {
    case "Tab":
      cancelButton.focus();
      return;
    case "Enter":
    case "Space":
      this.insertDate.bind(this);
      return;
    case "Escape":
      this.cancelDialog();
  }
};
