import { submitBtnHandler } from './submitBtnHandler.js';

export function initFormEventChecker() {
	const form = document.querySelector('form');
	form.addEventListener('input', submitBtnHandler);
	form.addEventListener('click', submitBtnHandler);
}
