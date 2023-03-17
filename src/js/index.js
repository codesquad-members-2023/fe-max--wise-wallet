import { initInputDate } from './components/inputbar/initInputDate.js';
import { initHeaderMonthYear } from './components/header/initHeaderMonthYear.js';
import './components/inputbar/dropdown.js';
import './utils/formValidation.js';
import './components/inputbar/autoComma.js';
import './components/inputbar/switchCategory.js';
import './data/formData.js';
import './utils/submitBtnHandelr.js';

const init = () => {
	initHeaderMonthYear();
	initInputDate();
};

window.addEventListener('load', init);
