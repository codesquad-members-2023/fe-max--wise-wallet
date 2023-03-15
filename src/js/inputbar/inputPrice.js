const inputPrice = document.querySelector('#inputPrice');

inputPrice.addEventListener('change', e => {
	e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
