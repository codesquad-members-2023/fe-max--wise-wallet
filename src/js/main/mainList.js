export function renderMainList(data) {
	if (isNewDate) {
		addDailyList();
	}
	addDailyDetailList(data);
}

function isNewDate() {
	// 이미 저장된 내역이 있는 날짜인지 확인
}

function addDailyList() {
	const newLi = document.createElement('li');
	const newDiv = document.createElement('div');
	const newUl = document.createElement('ul');

	newLi.classList.add('daily-list');
	newDiv.classList.add('daily-info');
	newUl.classList.add('daily-detail-lists-container');
	newLi.appendChild(newDiv);
	newLi.appendChild(newUl);

	const currentPosition = document.querySelector('ul.daily-lists-container');
	currentPosition.insertAdjacentElement('afterbegin', newLi);
}

function addDailyDetailList(data) {
	const newList = document.createElement('li');
	const Detail_Template = key => `<div class="daily-detail-${key}">${data[key]}</div>`;

	newList.classList.add('expenditure');
	newList.appendChild(Detail_Template('category'));
	newList.appendChild(Detail_Template('memo'));
	newList.appendChild(Detail_Template('payment'));
	newList.appendChild(Detail_Template('price'));

	const dailyDetailLists = document.querySelector('ul.daily-datail-lists-container');
	dailyDetailLists.insertAdjacentElement('beforeend', newList);
}

function updateDailyInfo() {
	// 윗 부분 일별 수입지출 내역 요약부분 수정
}

// 메인영역렌더링함수
// 로컬스토리지에 해당 날짜 데이터 없으면 데일리 리스트 생성,
// 있으면 바로 세부사항 리스트 생성
// 당일내역정보 업데이트
// 전체내역정보 업데이트

// 데일리 리스트 생성함수
// 세부사항 리스트 생성함수
// 당일내역정보 업데이트
// 전체내역정보 업데이트
