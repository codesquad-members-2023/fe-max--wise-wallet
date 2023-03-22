import { renderMainList } from '../main/mainList.js';

const form = document.querySelector('form');

function submitEventHandler() {
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
	const monthlyList = JSON.parse(localStorage.getItem(yearMonthKey)) ?? {};
	const dailyList = monthlyList[data.date] ? monthlyList[data.date] : [];

	storeFormDate(monthlyList, yearMonthKey, dailyList, data);
}

function storeFormDate(monthlyList, yearMonthKey, dailyList, data) {
	dailyList.push(data);
	monthlyList[data.date] = dailyList;

	localStorage.setItem(yearMonthKey, JSON.stringify(monthlyList));
}

submitEventHandler();
