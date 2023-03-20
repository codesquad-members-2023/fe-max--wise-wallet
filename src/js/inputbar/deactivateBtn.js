export function deactivateBtn() {
	const submitBtn = document.querySelector('.submit-btn svg');
	submitBtn.removeAttribute('style');
	submitBtn.children[0].setAttribute('fill', '#A79FCB');
	submitBtn.children[0].setAttribute('fill-opacity', '.4');
}
