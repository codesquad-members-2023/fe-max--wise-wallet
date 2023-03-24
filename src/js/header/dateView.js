import { year, month, monthText } from '../utils/date.js';
import { headerDateElements } from '../utils/elements.js';

export default function initCurrentDate() {
  const { $year, $month, $monthText } = headerDateElements;

  $year.textContent = year;
  $month.textContent = month;
  $monthText.textContent = monthText;
}
