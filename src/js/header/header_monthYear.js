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
  leftNav: document.getElementById("chevron_left"),
  rightNav: document.getElementById("chevron_right"),

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
};

monthYear.init();

monthYear.leftNav.addEventListener("click", (e) => {
  if (monthYear.monthText.textContent === "1") {
    monthYear.getPreviousYear();
    monthYear.monthText.textContent = "12";
    monthYear.getMonthChar();
  } else {
    monthYear.getPreviousMonth();
    monthYear.getMonthChar();
  }
});

monthYear.rightNav.addEventListener("click", (e) => {
  if (monthYear.monthText.textContent === "12") {
    monthYear.getNextYear();
    monthYear.monthText.textContent = "1";
    monthYear.getMonthChar();
  } else {
    monthYear.getNextMonth();
    monthYear.getMonthChar();
  }
});
