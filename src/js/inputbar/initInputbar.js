import { initInputbarDate } from './initInputbarDate.js';
import { initFormEventChecker } from './initFormChecker.js';
import { initFormValidation } from '../utils/formValidation.js';
import { checkPriceCheckbox } from './checkPriceCheckbox.js';
import { addAutoComma } from '../utils/autoComma.js';
import { handleDropdown } from './dropdown.js';
import { checkSubmitEvent } from './submitEvent.js';

export function initInputbar() {
	initInputbarDate();
	initFormEventChecker();
	initFormValidation();
	checkPriceCheckbox();
	addAutoComma();
	handleDropdown();
	checkSubmitEvent();
}
