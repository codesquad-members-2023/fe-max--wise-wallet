// 체크박스에 클릭 이벤트 걸기
// 인풋 체크박스 상태 확인

// 체크가 되어있으면 리스트들 display:block, infofilter도 체크된 것만 나오게 변경
// 체크가 안 되어있으면 리스트들 display:none, infofilter도 체크된 것만 나오게 변경

// 이때 그 날짜에 아무것도 없으면 infofilter도 숨김
export function initFilterList() {
	const expenditureCheckbox = document.querySelector('#expenditureCheckbox');
	const incomeCheckbox = document.querySelector('#incomeCheckbox');

	expenditureCheckbox.addEventListener('click', e => {
		if (e.target.checked) {
			toggleDisplay('expenditure', 'show');
		} else {
			toggleDisplay('expenditure', 'hide');
		}
	});
	incomeCheckbox.addEventListener('click', e => {
		if (e.target.checked) {
			toggleDisplay('income', 'show');
		} else {
			toggleDisplay('income', 'hide');
		}
	});
}

function toggleDisplay(target, status) {
	let dailyDetails = '';
	let dailyInfos = '';
	if (target === 'expenditure') {
		dailyDetails = document.querySelectorAll('.daily-detail-list.expenditure');
		dailyInfos = document.querySelectorAll('.total-expenditure');
	} else if (target === 'income') {
		dailyDetails = document.querySelectorAll('.daily-detail-list.income');
		dailyInfos = document.querySelectorAll('.total-income');
	}

	if (status === 'show') {
		dailyDetails.forEach(el => {
			el.classList.remove('hide');
		});
		dailyInfos.forEach(el => {
			el.classList.remove('hide');
		});
	} else if (status === 'hide') {
		dailyDetails.forEach(el => {
			el.classList.add('hide');
		});
		dailyInfos.forEach(el => {
			el.classList.add('hide');
		});
	}
}
