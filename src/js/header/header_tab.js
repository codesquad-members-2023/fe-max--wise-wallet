import { common } from "./header_common.js";

function activateDoc() {
  common.doc.setAttribute("condition", "activate");
  common.doc.setAttribute("src", "./src/svg/tab_activate_doc.svg");
}

function disabledDoc() {
  common.doc.setAttribute("condition", "disabled");
  common.doc.setAttribute("src", "./src/svg/tab_disabled_doc.svg");
}

function activateCalendar() {
  common.calendar.setAttribute("condition", "activate");
  common.calendar.setAttribute("src", "./src/svg/tab_activate_calendar.svg");
}

function disabledCalendar() {
  common.calendar.setAttribute("condition", "disabled");
  common.calendar.setAttribute("src", "./src/svg/tab_disabled_calendar.svg");
}

function activateChart() {
  common.chart.setAttribute("condition", "activate");
  common.chart.setAttribute("src", "./src/svg/tab_activate_chart.svg");
}

function disabledChart() {
  common.chart.setAttribute("condition", "disabled");
  common.chart.setAttribute("src", "./src/svg/tab_disabled_chart.svg");
}

common.doc.addEventListener("click", () => {
  activateDoc();
  disabledCalendar();
  disabledChart();
});

common.calendar.addEventListener("click", () => {
  disabledDoc();
  activateCalendar();
  disabledChart();
});

common.chart.addEventListener("click", () => {
  disabledDoc();
  disabledCalendar();
  activateChart();
});
