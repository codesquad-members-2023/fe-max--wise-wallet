const form = document.querySelector('form');

function submitEventHandler() {
	form.addEventListener('submit', e => {
		e.preventDefault();

		const formData = new FormData(form);
		const inputData = {};

		for (const item of formData) {
			inputData[item[0]] = item[1];
		}
		console.log(inputData);
		processFormDate(inputData);
	});
}

function processFormDate(data) {
	const yearMonthId = data.date.slice(0, 6);
	if (!localStorage.getItem(yearMonthId)) {
		localStorage.setItem(yearMonthId, JSON.stringify({}));
	}

	const monthlyList = JSON.parse(localStorage.getItem(yearMonthId));
	const dailyList = monthlyList[data.date] ? monthlyList[data.date] : [];

	storeFormDate(monthlyList, yearMonthId, dailyList, data);
}

function storeFormDate(monthlyList, yearMonthId, dailyList, data) {
	dailyList.push(data);
	monthlyList[data.date] = dailyList;

	localStorage.setItem(yearMonthId, JSON.stringify(monthlyList));
}

submitEventHandler();
