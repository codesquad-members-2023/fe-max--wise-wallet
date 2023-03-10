// const dropdown = document.querySelector('.select-payment-dropdown');

function show(option) {
	if (option) document.querySelector('.select-box').value = option;

	let dropdown = document.querySelector('.select-payment-dropdown');
	dropdown.onclick = () => {
		dropdown.classList.toggle('active');
	};
}
