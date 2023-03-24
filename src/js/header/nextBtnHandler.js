import { monthNameList } from '../constants/constants.js';

export function nextBtnHandler() {
	const currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	let year = Number(currentYearEl.textContent);
	let month = Number(currentMonthEl.textContent);

	if (month === 12) {
		year += 1;
		month = 1;
		currentYearEl.textContent = year;
		currentMonthEl.textContent = month;
		currentMonthNameEl.textContent = monthNameList[month];
	} else {
		month += 1;
		currentMonthEl.textContent = month;
		currentMonthNameEl.textContent = monthNameList[month];
	}
}
