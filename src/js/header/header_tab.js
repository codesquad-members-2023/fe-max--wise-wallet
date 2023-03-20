const tab = {
  doc: document.getElementById("img_doc"),
  calendar: document.getElementById("img_calendar"),
  chart: document.getElementById("img_chart"),

  activateDoc() {
    this.doc.setAttribute("condition", "activate");
    this.doc.setAttribute("src", "./src/svg/tab_activate_doc.svg");
  },

  disabledDoc() {
    this.doc.setAttribute("condition", "disabled");
    this.doc.setAttribute("src", "./src/svg/tab_disabled_doc.svg");
  },

  activateCalendar() {
    this.calendar.setAttribute("condition", "activate");
    this.calendar.setAttribute("src", "./src/svg/tab_activate_calendar.svg");
  },

  disabledCalendar() {
    this.calendar.setAttribute("condition", "disabled");
    this.calendar.setAttribute("src", "./src/svg/tab_disabled_calendar.svg");
  },

  activateChart() {
    this.chart.setAttribute("condition", "activate");
    this.chart.setAttribute("src", "./src/svg/tab_activate_chart.svg");
  },

  disabledChart() {
    this.chart.setAttribute("condition", "disabled");
    this.chart.setAttribute("src", "./src/svg/tab_disabled_chart.svg");
  },
};

tab.doc.addEventListener("click", (e) => {
  tab.activateDoc();
  tab.disabledCalendar();
  tab.disabledChart();
});

tab.calendar.addEventListener("click", (e) => {
  tab.disabledDoc();
  tab.activateCalendar();
  tab.disabledChart();
});

tab.chart.addEventListener("click", (e) => {
  tab.disabledDoc();
  tab.disabledCalendar();
  tab.activateChart();
});
