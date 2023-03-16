import { $ } from '../utils/dom.js';
import { year, month, date } from '../utils/date.js';

export function initDateInput() {
  const dateInput = $('.history__form-date input');
  dateInput.value = `${year}${month}${date}`;
}
