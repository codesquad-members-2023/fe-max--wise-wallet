const switchBtn = document.querySelector('.input-price-checkbox');

switchBtn.addEventListener('input', e => {
	const expenditureList = document.querySelector('.expenditure-category-list');
	const incomeList = document.querySelector('.income-category-list');
	if (e.target.checked) {
		incomeList.style.removeProperty('display');
		expenditureList.style.display = 'none';
	} else {
		expenditureList.style.removeProperty('display');
		incomeList.style.display = 'none';
	}
});
