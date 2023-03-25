import { bcColorList } from '../constants/constants.js';

export function renderMainList(data) {
	if (isNewDate(data)) {
		addDailyList(data);
		addDailyInfo(data);
	}
	addDailyDetailList(data);
	updateDailyInfo(data);
	updateInfoFilter(data);
}

function isNewDate({ date }) {
	const targetDateList = document.querySelector(`#list-${date}`);
	return targetDateList === null;
}

function addDailyList({ date }) {
	const newLi = document.createElement('li');
	const newDiv = document.createElement('div');
	const newUl = document.createElement('ul');

	newLi.classList.add('daily-list');
	newDiv.classList.add('daily-info');
	newUl.classList.add('daily-detail-lists-container');
	newLi.setAttribute('id', `list-${date}`);
	newLi.append(newDiv, newUl);
	const referenceNode = findReferenceNode(date);
	const parentNode = document.querySelector('ul.daily-lists-container');
	parentNode.insertBefore(newLi, referenceNode);
}

function findReferenceNode(date) {
	const dailyListNodes = document.querySelectorAll('.daily-list');
	if (dailyListNodes.length !== 0) {
		const ids = [];
		dailyListNodes.forEach(el => ids.push(el.id));

		let i = 0;
		while (i < dailyListNodes.length && date < ids[i].slice(-8)) {
			i++;
		}
		return dailyListNodes[i];
	}
}

function addDailyInfo({ date, price, income }) {
	const targetDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`);
	const days = ['일', '월', '화', '수', '목', '금', '토'];
	const monthInfo = targetDate.getMonth() + 1;
	const dateInfo = targetDate.getDate();
	const dayInfo = days[targetDate.getDay()];
	const inOrOut = income ? '수입' : '지출';
	const className = income ? 'total-income' : 'total-expenditure';
	const priceInfo = price;

	const dailyInfoTemplate = `<div><span>${monthInfo}월 ${dateInfo}일</span> <span>${dayInfo}</span></div>
  <div> <span class="${className}">${inOrOut} ${priceInfo}원</span></div>`;
	const dailyInfo = document.querySelector(`#list-${date} .daily-info`);
	dailyInfo.insertAdjacentHTML('afterbegin', dailyInfoTemplate);
}

function addDailyDetailList(data) {
	const newList = document.createElement('li');
	const bcColor = bcColorList[data.category];
	const detailTemplate = `<div class="daily-detail-category ${bcColor}">${data.category}</div>
  <div class="daily-detail-memo">${data.memo}</div>
  <div class="daily-detail-payment">${data.payment}</div>
  <div class="daily-detail-price">${!data.hasOwnProperty('income') ? '-' : '+'}${data.price}원</div>`;

	newList.classList.add('daily-detail-list');
	if (!data.hasOwnProperty('income')) {
		newList.classList.add('expenditure');
	} else {
		newList.classList.add('income');
	}

	newList.insertAdjacentHTML('beforeend', detailTemplate);
	const dailyDetailLists = document.querySelector(`#list-${data.date} ul`);
	dailyDetailLists.insertAdjacentElement('afterbegin', newList);
}

function updateDailyInfo(data) {
	const dailyInfo = document.querySelector(`#list-${data.date} div`);
	const monthYearKey = data.date.slice(0, 6);
	const storage = JSON.parse(localStorage.getItem(monthYearKey))[data.date];
	if (!data.hasOwnProperty('income')) {
		updateExpenditureInfo(dailyInfo, storage);
	} else {
		updateIncomeInfo(dailyInfo, storage);
	}
}

function updateExpenditureInfo(dailyInfo, storage) {
	const updatedExpenditure = storage.totalExpenditure.toLocaleString();
	const dailyTotalPrice = dailyInfo.lastElementChild.lastElementChild;

	if (dailyTotalPrice.textContent.includes('지출')) {
		dailyTotalPrice.textContent = `지출 ${updatedExpenditure}원`;
	} else {
		const expenditureInfoTemplate = ` <span class="total-expenditure">지출 ${updatedExpenditure}원</span>`;
		dailyInfo.lastElementChild.insertAdjacentHTML('beforeend', expenditureInfoTemplate);
	}
}

function updateIncomeInfo(dailyInfo, storage) {
	const updatedIncome = storage.totalIncome.toLocaleString();
	const dailyTotalPrice = dailyInfo.lastElementChild.firstElementChild;

	if (dailyTotalPrice.textContent.includes('수입')) {
		dailyTotalPrice.textContent = `수입 ${updatedIncome}원`;
	} else {
		const incomeInfoTemplate = ` <span class="total-income">수입 ${updatedIncome}원</span>`;
		dailyInfo.lastElementChild.insertAdjacentHTML('afterbegin', incomeInfoTemplate);
	}
}

function updateInfoFilter({ date }) {
	const monthYearKey = date.slice(0, 6);
	const storage = JSON.parse(localStorage.getItem(monthYearKey));
	const totalCount = calculateCount(storage);
	const totalIncome = calculateIncome(storage);
	const totalExpenditure = calculateExpenditure(storage);
	const infoFilter = document.querySelector('.info-filter');

	infoFilter.firstElementChild.textContent = `전체 내역 ${totalCount}건`;
	infoFilter.lastElementChild.children[1].textContent = `수입 ${totalIncome}`;
	infoFilter.lastElementChild.children[3].textContent = `지출 ${totalExpenditure}`;
}

function calculateCount(storage) {
	let totalCount = 0;
	for (const dailyData of Object.values(storage)) {
		totalCount += dailyData.count;
	}
	return totalCount;
}

function calculateIncome(storage) {
	let totalIncome = 0;
	for (const dailyData of Object.values(storage)) {
		totalIncome += dailyData.totalIncome;
	}
	return totalIncome.toLocaleString();
}

function calculateExpenditure(storage) {
	let totalExpenditure = 0;
	for (const dailyData of Object.values(storage)) {
		totalExpenditure += dailyData.totalExpenditure;
	}
	return totalExpenditure.toLocaleString();
}
