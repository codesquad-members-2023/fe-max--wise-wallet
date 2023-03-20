import { prevBtnHandler } from './prevBtnHandler.js';
import { nextBtnHandler } from './nextBtnHandler.js';

export function checkBtnClickEvent() {
	const prevBtnEl = document.querySelector('.prev-btn');
	const nextBtnEl = document.querySelector('.next-btn');

	prevBtnEl.addEventListener('click', prevBtnHandler);
	nextBtnEl.addEventListener('click', nextBtnHandler);
}
