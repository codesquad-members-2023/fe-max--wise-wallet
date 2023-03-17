import { $ } from '../utils/dom.js';
import { year, month, date } from '../utils/date.js';

export function initDateInput() {
  const dateInput = $('.history__form-date input');
  const currMonth = String(month + 1).padStart(2, '0');
  const currDate = String(date).padStart(2, '0');

  dateInput.value = `${year}${currMonth}${currDate}`;
}
