import { renderMainList } from '../main/mainList.js';

export function checkSubmitEvent() {
	const form = document.querySelector('form');
	form.addEventListener('submit', e => {
		e.preventDefault();

		const formData = new FormData(form);
		const inputData = {};

		for (const item of formData) {
			inputData[item[0]] = item[1];
		}

		processFormDate(inputData);
		renderMainList(inputData);
	});
}

function processFormDate(data) {
	const yearMonthKey = data.date.slice(0, 6);
	const defaultDailyList = {
		details: [],
		count: 0,
		totalExpenditure: 0,
		totalIncome: 0,
	};
	const monthlyList = JSON.parse(localStorage.getItem(yearMonthKey)) ?? {};
	const dailyList = monthlyList[data.date] ? monthlyList[data.date] : defaultDailyList;

	storeFormDate(monthlyList, yearMonthKey, dailyList, data);
}

function storeFormDate(monthlyList, yearMonthKey, dailyList, data) {
	const { price } = data;
	const currentPrice = parseInt(price.replaceAll(',', ''), 10);
	if (!data.hasOwnProperty('income')) {
		dailyList.totalExpenditure += currentPrice;
	} else {
		dailyList.totalIncome += currentPrice;
	}
	dailyList.count++;
	dailyList.details.push(data);
	monthlyList[data.date] = dailyList;

	localStorage.setItem(yearMonthKey, JSON.stringify(monthlyList));
}
