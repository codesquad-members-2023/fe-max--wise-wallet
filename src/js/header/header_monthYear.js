import { common } from "./header_common.js";

function yearMonthInit() {
  common.yearText.textContent = common.year;
  common.monthText.textContent = common.month;
  common.monthCharText.textContent = common.monthChar[common.month - 1];
}

function getPreviousYear() {
  common.yearText.textContent = +common.yearText.textContent - 1;
}

function getPreviousMonth() {
  common.monthText.textContent = +common.monthText.textContent - 1;
}

function getMonthChar() {
  common.monthCharText.textContent =
    common.monthChar[common.monthText.textContent - 1];
}

function getNextYear() {
  common.yearText.textContent = +common.yearText.textContent + 1;
}

function getNextMonth() {
  common.monthText.textContent = +common.monthText.textContent + 1;
}

function setPreviousYear() {
  getPreviousYear();
  common.monthText.textContent = "12";
  getMonthChar();
}

function setPreviousMonth() {
  getPreviousMonth();
  getMonthChar();
}

function setNextYear() {
  getNextYear();
  common.monthText.textContent = "1";
  getMonthChar();
}

function setNextMonth() {
  getNextMonth();
  getMonthChar();
}

document.addEventListener("DOMContentLoaded", yearMonthInit());

common.leftChevron.addEventListener("click", () => {
  const isJanuary = common.monthText.textContent === "1";
  if (isJanuary) {
    setPreviousYear();
  } else {
    setPreviousMonth();
  }
});

common.rightChevron.addEventListener("click", () => {
  const isDecember = common.monthText.textContent === "12";
  if (isDecember) {
    setNextYear();
  } else {
    setNextMonth();
  }
});
