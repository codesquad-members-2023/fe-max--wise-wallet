import { monthNameList } from '../../constants/monthNameList.js';

export function nextBtnHandler() {
	const currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	let year = Number(currentYearEl.innerText);
	let month = Number(currentMonthEl.innerText);

	if (month === 12) {
		year += 1;
		month = 1;
		currentYearEl.innerText = year;
		currentMonthEl.innerText = month;
		currentMonthNameEl.innerText = monthNameList[month];
	} else {
		month += 1;
		currentMonthEl.innerText = month;
		currentMonthNameEl.innerText = monthNameList[month];
	}
}
