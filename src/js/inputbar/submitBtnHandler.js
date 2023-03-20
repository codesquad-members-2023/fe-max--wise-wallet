import { isAllFilled } from './isAllFilled.js';
import { activateBtn } from './activateBtn.js';
import { deactivateBtn } from './deactivateBtn.js';

export function submitBtnHandler() {
	if (isAllFilled()) {
		activateBtn();
	} else {
		deactivateBtn();
	}
}
