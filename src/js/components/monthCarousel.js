const yearView = document.querySelector(".month-view p:nth-child(1)");
const monthView = document.querySelector(".month-view p:nth-child(2)");
const monthNameView = document.querySelector(".month-view p:nth-child(3)");
const prevButton = document.querySelector(".prev-month-btn");
const nextButton = document.querySelector(".next-month-btn");

const current = new Date();
const PREV = -1;
const NEXT = 1;

const initMonthView = () => {
  yearView.textContent = current.getFullYear();
  monthView.textContent = current.getMonth() + 1;
  monthNameView.textContent = current.toLocaleString("en-US", {
    month: "long",
  });
};

const updateMonthTo = (diff) => {
  current.setMonth(current.getMonth() + diff);
};

const handlePrevButtonClick = () => {
  updateMonthTo(PREV);
  initMonthView();
};

const handleNextButtonClick = () => {
  updateMonthTo(NEXT);
  initMonthView();
};

const addButtonEventListener = () => {
  prevButton.addEventListener("click", handlePrevButtonClick);
  nextButton.addEventListener("click", handleNextButtonClick);
};

export { initMonthView, addButtonEventListener };
