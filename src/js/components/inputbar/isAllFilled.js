export function isAllFilled() {
	const inputs = document.querySelectorAll('form input[type=text]');
	for (const input of inputs) {
		if (!input.value) return false;
	}
	return true;
}
