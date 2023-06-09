export function moveMonth() {
  const currentDate = new Date();
  updateDate(currentDate);
  onClickPrevMonth(currentDate);
  onClickNextMonth(currentDate);
}

function onClickPrevMonth(currentDate) {
  const prevButton = document.querySelector('.monthyear__previcon');
  prevButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateDate(currentDate);
  });
}

function onClickNextMonth(currentDate) {
  const nextButton = document.querySelector('.monthyear__nexticon');
  nextButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateDate(currentDate);
  });
}

function updateDate(currentDate) {
  const yearSpan = document.querySelector('.header__year');
  const monthSpan = document.querySelector('.header__month');
  const monthEnSpan = document.querySelector('.header__month__en');
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentMonthEn = currentDate.toLocaleString('en-US', {
    month: 'long'
  });
  yearSpan.textContent = currentYear;
  monthSpan.textContent = currentMonth;
  monthEnSpan.textContent = currentMonthEn;
}
