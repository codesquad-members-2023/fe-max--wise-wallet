import { initHeader } from './header/initHeader.js';
import { initInputbar } from './inputbar/initInputbar.js';
import { initMain } from './main/initMain.js';

const init = () => {
	initHeader();
	initInputbar();
	initMain();
};

window.addEventListener('load', init);
