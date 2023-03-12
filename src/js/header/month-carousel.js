const yearDisplay = document.querySelector("#year");
const monthNumDisplay = document.querySelector("#month-num");
const monthCharDisplay = document.querySelector("#month-char");
const btns = document.querySelectorAll(".month-year__carousel__btn");

const months = [
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
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.name;

    const currYear = yearDisplay.innerText;
    const currMonthNum = monthNumDisplay.innerText;

    if (action === "previous") {
      const prevMonth = new Date(currYear, currMonthNum - 2);
      yearDisplay.innerText = prevMonth.getFullYear();
      monthNumDisplay.innerText = prevMonth.getMonth() + 1;
      monthCharDisplay.innerText = months[prevMonth.getMonth()];
    } else {
      const nextMonth = new Date(currYear, parseInt(currMonthNum));
      yearDisplay.innerText = nextMonth.getFullYear();
      monthNumDisplay.innerText = nextMonth.getMonth() + 1;
      monthCharDisplay.innerText = months[nextMonth.getMonth()];
    }
  });
});
