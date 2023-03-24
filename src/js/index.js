import { initInputBarDate } from './inputbar/initInputBarDate.js';
import { initHeaderMonthYear } from './header/initHeaderMonthYear.js';
import { initFormEventChecker } from './inputbar/initFormChecker.js';
import { initMainRender } from './main/initMainRender.js';
import { initFilterList } from './main/infoFilter.js';
import './inputbar/dropdown.js';
import './inputbar/autoComma.js';
import './inputbar/switchCategory.js';
import './utils/formValidation.js';
import './data/storeInputData.js';

const init = () => {
	initHeaderMonthYear();
	initInputBarDate();
	initFormEventChecker();
	initMainRender();
	initFilterList();
};

window.addEventListener('load', init);
