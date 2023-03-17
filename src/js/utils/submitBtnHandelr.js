function isAllFilled() {
	const inputs = document.querySelectorAll('form input[type=text]');
	for (const input of inputs) {
		if (!input.value) return false;
	}
	return true;
}

function activateBtn() {
	const submitBtn = document.querySelector('.submit-btn svg');
	submitBtn.setAttribute('style', 'cursor: pointer');
	submitBtn.children[0].setAttribute('fill', '#F5B853');
	submitBtn.children[0].setAttribute('fill-opacity', '1');
}

function deactivateBtn() {
	const submitBtn = document.querySelector('.submit-btn svg');
	submitBtn.removeAttribute('style');
	submitBtn.children[0].setAttribute('fill', '#A79FCB');
	submitBtn.children[0].setAttribute('fill-opacity', '.4');
}

function btnControl() {
	if (isAllFilled()) {
		activateBtn();
	} else {
		deactivateBtn();
	}
}

function formEventChecker() {
	const form = document.querySelector('form');
	form.addEventListener('input', btnControl);
	form.addEventListener('click', btnControl);
}

formEventChecker();
