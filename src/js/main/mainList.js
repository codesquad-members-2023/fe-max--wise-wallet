function addDailyList(txt) {
	const newLi = document.createElement('li');
	const newDiv = document.createElement('div');
	const newUl = document.createElement('ul');
	const newText = document.createTextNode(txt);

	newLi.classList.add('daily-list');
	newDiv.classList.add('daily-info');
	newUl.classList.add('daily-detail-lists-container');
	newLi.appendChild(newDiv);
	newLi.appendChild(newUl);
	newUl.appendChild(newText);

	const currentPosition = document.querySelector('ul.daily-lists-container');
	currentPosition.insertAdjacentElement('afterbegin', newLi);
}

function addDailyDetailList() {}
