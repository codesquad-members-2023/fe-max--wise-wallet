const monthYear = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  monthChar: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  yearText: document.getElementById("monthYear_text_year"),
  monthText: document.getElementById("monthYear_text_month_number"),
  monthCharText: document.getElementById("monthYear_text_month_char"),
  leftChevron: document.getElementById("chevron_left"),
  rightChevron: document.getElementById("chevron_right"),

  init() {
    this.yearText.textContent = this.year;
    this.monthText.textContent = this.month;
    this.monthCharText.textContent = this.monthChar[this.month - 1];
  },

  getPreviousYear() {
    this.yearText.textContent = +this.yearText.textContent - 1;
  },

  getPreviousMonth() {
    this.monthText.textContent = +this.monthText.textContent - 1;
  },

  getMonthChar() {
    this.monthCharText.textContent =
      this.monthChar[this.monthText.textContent - 1];
  },

  getNextYear() {
    this.yearText.textContent = +this.yearText.textContent + 1;
  },

  getNextMonth() {
    this.monthText.textContent = +this.monthText.textContent + 1;
  },

  setPreviousYear() {
    this.getPreviousYear();
    this.monthText.textContent = "12";
    this.getMonthChar();
  },

  setPreviousMonth() {
    this.getPreviousMonth();
    this.getMonthChar();
  },

  setNextYear() {
    this.getNextYear();
    this.monthText.textContent = "1";
    this.getMonthChar();
  },

  setNextMonth() {
    this.getNextMonth();
    this.getMonthChar();
  }
};

monthYear.init();

monthYear.leftChevron.addEventListener("click", (e) => {
  const isJanuary = monthYear.monthText.textContent === "1";
  if (isJanuary) {
    monthYear.setPreviousYear();
  } else {
    monthYear.setPreviousMonth();
  }
});

monthYear.rightChevron.addEventListener("click", (e) => {
  const isDecember = monthYear.monthText.textContent === "12";
  if (isDecember) {
    monthYear.setNextYear();
  } else {
    monthYear.setNextMonth();
  }
});
