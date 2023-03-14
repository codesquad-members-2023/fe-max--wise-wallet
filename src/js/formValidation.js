const form = document.querySelector('form');
const dateInput = document.querySelector('#inputDate');
const inputPrice = document.querySelector('#inputPrice');

const dateRegEx = /^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
const priceRegEx = /^\d{1,3}(,\d{3})*(\.\d+)?$/;

const validateWithRegex = (input, regex) => {
	form.addEventListener('change', e => {
		if (regex.test(input.value)) {
			input.style.border = '2px solid #80ed99';
			input.style.borderRadius = '6px';
			input.style.boxShadow = '0 0 8px #80ed99';
		} else {
			e.preventDefault();
			input.style.border = '2px solid #ef476f';
			input.style.borderRadius = '6px';
			input.style.boxShadow = '0 0 8px #ef476f';
		}
	});
};

validateWithRegex(dateInput, dateRegEx);
validateWithRegex(inputPrice, priceRegEx);
