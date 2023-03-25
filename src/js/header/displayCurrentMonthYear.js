import { getToday } from '../utils/getToday.js';
import { monthNameList } from '../constants/constants.js';

export function displayCurrentMonthYear() {
	const { year, month } = getToday();
	const currentYear = year;
	const currentMonth = month;

	const currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	currentYearEl.textContent = currentYear;
	currentMonthEl.textContent = currentMonth;
	currentMonthNameEl.textContent = monthNameList[currentMonth];
}
