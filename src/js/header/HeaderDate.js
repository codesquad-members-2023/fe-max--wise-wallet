import { $ } from '../utils/dom.js';
import { year, month, monthName } from '../utils/date.js';

const headerDateWrap = document.createElement('div');
headerDateWrap.className = 'header__date-wrap';

const yearDiv = document.createElement('div');
yearDiv.className = 'bold-small year';
yearDiv.textContent = year;

const monthDiv = document.createElement('div');
monthDiv.className = 'display-large month';
monthDiv.textContent = month + 1;

const monthWordDiv = document.createElement('div');
monthWordDiv.className = 'bold-small month-word';
monthWordDiv.textContent = monthName;

headerDateWrap.appendChild(yearDiv);
headerDateWrap.appendChild(monthDiv);
headerDateWrap.appendChild(monthWordDiv);

const headerDate = $('.header__date');
headerDate.appendChild(headerDateWrap);
