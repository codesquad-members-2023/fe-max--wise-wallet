export function activateBtn() {
	const submitBtn = document.querySelector('.submit-btn svg');
	submitBtn.setAttribute('style', 'cursor: pointer');
	submitBtn.children[0].setAttribute('fill', '#F5B853');
	submitBtn.children[0].setAttribute('fill-opacity', '1');
}
