import { getToday } from '../utils/getToday.js';
import { renderMainList } from './mainList.js';

export function initMainRender() {
	let { year, month } = getToday();
	month = `0${month}`.slice(-2);
	const yearMonthKey = year + month;

	if (!localStorage.getItem(yearMonthKey)) return;
	const monthlyData = JSON.parse(localStorage.getItem(yearMonthKey));
	const dataList = readLocalStorage(monthlyData);
	renderMain(dataList);
}

function readLocalStorage(monthlyData) {
	const dataList = [];
	for (const [key, value] of Object.entries(monthlyData)) {
		dataList.push(value);
	}
	return dataList;
}

function renderMain(dataList) {
	const detailsList = dataList.map(el => el.details);
	for (const dailyDetails of detailsList) {
		for (const dailyDetail of dailyDetails) {
			renderMainList(dailyDetail);
		}
	}
}
