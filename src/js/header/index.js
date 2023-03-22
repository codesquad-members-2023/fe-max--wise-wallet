import initCurrentDate from './dateView.js';
import moveDateClickHandler from './dateButton.js';
import navClickHandler from './gnb.js';

export function Header() {
  initCurrentDate();
  moveDateClickHandler();
  navClickHandler();
}
