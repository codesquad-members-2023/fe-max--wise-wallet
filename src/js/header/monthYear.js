import { getToday } from '../inputbar/getToday.js';

function displayCurrentMonthYear() {
	const { year, month } = getToday();
	const currentYear = year;
	const currentMonth = month;

	const monthNameList = {
		1: 'January',
		2: 'Feburary',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December',
	};

	const $currentYearEl = document.querySelector('div.current-month-year p:nth-of-type(1)');
	const $currentMonthEl = document.querySelector('div.current-month-year p:nth-of-type(2)');
	const $currentMonthNameEl = document.querySelector('div.current-month-year p:nth-of-type(3)');

	$currentYearEl.innerText = currentYear;
	$currentMonthEl.innerText = currentMonth;
	$currentMonthNameEl.innerText = monthNameList[currentMonth];
}

function initHeaderMonthYear() {
	displayCurrentMonthYear();
	// btnClickEventHandler();
}

// function btnClickEventHandler() {
//   이전, 다음 버튼 요소 불러오기
// 	각 버튼에 이벤트 걸기
//   이전 버튼 클릭 -> clickPrevBtnHandler();
// 	다음 버튼 클릭 -> clickNextBtnHandler();
// }

// function clickPrevBtnHandler() {
//   연월 요소 불러오기
//   연 수정 (선택)
//   월 -1 수정
// }

// function clickNextBtnHandler() {
//   연월 요소 불러오기
//   연 수정 (선택)
//   월 +1 수정
// }

initHeaderMonthYear();
