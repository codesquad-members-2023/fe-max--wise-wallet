import { getMonthText } from '../utils/date.js';
import { headerDateElements, headerDateBtnElement } from '../utils/elements.js';

export default function dateClickHandler() {
  const { $prevBtn, $nextBtn } = headerDateBtnElement;

  $prevBtn.addEventListener('click', () => moveMonth(-1));
  $nextBtn.addEventListener('click', () => moveMonth(1));
}

function moveMonth(move) {
  const { $year, $month } = headerDateElements;

  let year = parseInt($year.textContent, 10);
  let month = parseInt($month.textContent, 10);

  month += move;

  if (month < 1) {
    year -= 1;
    month = 12;
  } else if (month > 12) {
    year += 1;
    month = 1;
  }

  const monthText = getMonthText(month);
  updateDate({ year, month, monthText });
}

function updateDate(date) {
  const { $year, $month, $monthText } = headerDateElements;

  $year.textContent = date.year;
  $month.textContent = date.month;
  $monthText.textContent = date.monthText;
}
