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
	});
}

function processFormDate(data) {
	const currentLocalStorage = JSON.parse(localStorage.getItem('monthList'));
	const monthList = currentLocalStorage || {};
	const dailyList = monthList[data.date] ? monthList[data.date] : [];

	storeFormDate(monthList, dailyList, data);
}

function storeFormDate(monthList, dailyList, data) {
	dailyList.push(data);
	monthList[data.date] = dailyList;

	localStorage.setItem('monthList', JSON.stringify(monthList));
}

submitEventHandler();
