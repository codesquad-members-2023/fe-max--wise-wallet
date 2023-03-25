import { getToday } from '../utils/getToday.js';
import { renderMainList } from './mainList.js';

export function initMainRender() {
	let { year, month } = getToday();
	month = `0${month}`.slice(-2);
	const yearMonthKey = year + month;

	if (!localStorage.getItem(yearMonthKey)) return;
	const monthlyData = JSON.parse(localStorage.getItem(yearMonthKey));
	const detailsList = readLocalStorage(monthlyData);
	renderMain(detailsList);
}

function readLocalStorage(monthlyData) {
	const dataList = Object.values(monthlyData);
	const detailsList = dataList.map(el => el.details);
	return detailsList;
}

function renderMain(detailsList) {
	for (const dailyDetails of detailsList) {
		for (const dailyDetail of dailyDetails) {
			renderMainList(dailyDetail);
		}
	}
}
