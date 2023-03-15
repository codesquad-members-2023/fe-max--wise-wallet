import { getToday } from '../inputbar/getToday.js';

function displayCurrentMonthYear() {
	const { year, month } = getToday();
	const currentYear = year;
	const currentMonth = month;
	// const currentMonthName = 월이름 리스트[인덱스];

	const $currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const $currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const $currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	$currentYearEl.innerText = currentYear;
	$currentMonthEl.innerText = currentMonth;
	$currentMonthNameEl.innerText = 'March';
}

function initHeaderMonthYear() {
	displayCurrentMonthYear();
	// btnClickEventHandler();
}

// function btnClickEventHandler() {
// 	clickPrevBtn();
// 	clickNextBtn();
// }

initHeaderMonthYear();
