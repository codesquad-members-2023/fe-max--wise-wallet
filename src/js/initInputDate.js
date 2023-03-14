import { getToday } from './getToday.js';

const initInputDate = () => {
	const dateInput = document.querySelector('#inputDate');
	dateInput.value = getToday();
};

export { initInputDate };
