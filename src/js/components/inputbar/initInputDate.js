import { getToday } from '../../utils/getToday.js';

export const initInputDate = () => {
	const $dateInput = document.querySelector('#inputDate');
	let { year, month, date } = getToday();
	month = `0${month}`.slice(-2);
	date = `0${date}`.slice(-2);

	$dateInput.value = year + month + date;
};
