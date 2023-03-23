export function renderMainList(data) {
	if (isNewDate(data)) {
		addDailyList(data);
		addDailyInfo(data);
	}
	addDailyDetailList(data);
	// updateDailyInfo();
	// updateInfoFilter();
}

function isNewDate({ date }) {
	const yearMonthKey = date.slice(0, 6);
	const monthlyList = JSON.parse(localStorage.getItem(yearMonthKey));
	return monthlyList[date].length === 1;
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

	const currentPosition = document.querySelector('ul.daily-lists-container');
	currentPosition.insertAdjacentElement('afterbegin', newLi);
}

function addDailyInfo({ date, price, income }) {
	const targetDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`);
	const days = ['일', '월', '화', '수', '목', '금', '토'];
	const monthInfo = targetDate.getMonth() + 1;
	const dateInfo = targetDate.getDate();
	const dayInfo = days[targetDate.getDay()];
	const inOrOut = !income ? '지출' : '수입';
	const priceInfo = price;

	const dailyInfoTemplate = `<div><span>${monthInfo}월 ${dateInfo}일</span> <span>${dayInfo}</span></div>
  <div><span>${inOrOut} ${priceInfo}원</span></div>`;
	const dailyInfo = document.querySelector('.daily-info');
	dailyInfo.insertAdjacentHTML('afterbegin', dailyInfoTemplate);
}

function addDailyDetailList(data) {
	const newList = document.createElement('li');
	const detailTemplate = `<div class="daily-detail-category">${data.category}</div>
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
	// 날짜별 상단에 수입지출 요약부분 내용 업데이트
}

function updateInfoFilter() {
	// 메인화면 상단 전체내역 요약부분 업데이트
}
