const form = document.querySelector('form');
const dateInput = document.querySelector('#inputDate');
// const inputPrice = document.querySelector('#inputPrice');
// const inputMemo = document.querySelector('#inputMemo');

const dateRegEx = /^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
// const priceRegEx = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
// const emptyRegEx = /[^\s].*/;

const validateWithRegex = (input, regex) => {
	form.addEventListener('change', e => {
		if (!regex.test(input.value)) {
			e.preventDefault();
			alert('날짜 형식을 올바르게 입력했는지 확인하세요.');
		}
	});
};

validateWithRegex(dateInput, dateRegEx);
// validateWithRegex(inputPrice, priceRegEx);
// validateWithRegex(inputMemo, emptyRegEx);
