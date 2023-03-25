export function initFormValidation() {
	const dateInput = document.querySelector('#inputDate');
	const dateRegEx = /^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;

	validateWithRegex(dateInput, dateRegEx);
}

function validateWithRegex(input, regex) {
	const form = document.querySelector('form');
	form.addEventListener('change', e => {
		if (!regex.test(input.value)) {
			e.preventDefault();
			alert('날짜 형식을 올바르게 입력했는지 확인하세요.');
		}
	});
}
