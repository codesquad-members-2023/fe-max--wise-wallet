import { getToday } from '../inputbar/getToday.js';
import { monthNameList } from '../constant/monthNameList.js';

function displayCurrentMonthYear() {
	const { year, month } = getToday();
	const currentYear = year;
	const currentMonth = month;

	const $currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const $currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const $currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	$currentYearEl.innerText = currentYear;
	$currentMonthEl.innerText = currentMonth;
	$currentMonthNameEl.innerText = monthNameList[currentMonth];
}

function initHeaderMonthYear() {
	displayCurrentMonthYear();
	btnClickEventHandler();
}

function btnClickEventHandler() {
	const $prevBtnEl = document.querySelector('.prev-btn');
	const $nextBtnEl = document.querySelector('.next-btn');

	$prevBtnEl.addEventListener('click', clickPrevBtnHandler);
	// $nextBtnEl.addEventListener('click', clickNextBtnHandler);
}

function clickPrevBtnHandler() {
	const $currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const $currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const $currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	let year = Number($currentYearEl.innerText);
	let month = Number($currentMonthEl.innerText);

	if (month === 1) {
		year -= 1;
		month = 12;
		$currentYearEl.innerText = year;
		$currentMonthEl.innerText = month;
		$currentMonthNameEl.innerText = monthNameList[month];
	} else {
		month -= 1;
		$currentMonthEl.innerText = month;
		$currentMonthNameEl.innerText = monthNameList[month];
	}
}

// function clickNextBtnHandler() {
//   연월 요소 불러오기
//   연 수정 (선택)
//   월 +1 수정
// }

initHeaderMonthYear();
