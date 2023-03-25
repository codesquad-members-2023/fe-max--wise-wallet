export function addAutoComma() {
	const inputPrice = document.querySelector('#inputPrice');

	inputPrice.addEventListener('input', e => {
		e.target.value = e.target.value.replace(/,/g, '');
		e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	});
}
