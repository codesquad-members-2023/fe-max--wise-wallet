import { initInputBarDate } from './components/inputbar/initInputBarDate.js';
import { initHeaderMonthYear } from './components/header/initHeaderMonthYear.js';
import { initFormEventChecker } from './components/inputbar/initFormChecker.js';
import './components/inputbar/dropdown.js';
import './components/inputbar/autoComma.js';
import './components/inputbar/switchCategory.js';
import './data/formData.js';

const init = () => {
	initHeaderMonthYear();
	initInputBarDate();
	initFormEventChecker();
};

window.addEventListener('load', init);
