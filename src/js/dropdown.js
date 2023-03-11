const dropdown = document.querySelector('.select-payment-dropdown');
const inputbox = document.querySelector('.select-box');
const options = document.querySelectorAll('.option-item');

const handleSelect = item => {
	dropdown.classList.remove('active');
	inputbox.value = item.children[0].innerHTML;
};

options.forEach(option => {
	option.addEventListener('click', () => handleSelect(option));
});

inputbox.addEventListener('click', () => {
	dropdown.classList.toggle('active');
});

// function show(option) {
// 	if (option) document.querySelector('.select-box').value = option;

// 	let dropdown = document.querySelector('.select-payment-dropdown');
// 	dropdown.onclick = () => {
// 		dropdown.classList.toggle('active');
// 	};
// }
