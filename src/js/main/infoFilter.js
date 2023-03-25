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
