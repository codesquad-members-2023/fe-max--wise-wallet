export function handleDropdown() {
	const inputBar = document.querySelector('.input-bar-form');
	inputBar.addEventListener('click', e => {
		if (e.target.parentNode.id === 'paymentDropdown' && e.target.tagName === 'INPUT') {
			const paymentDropdown = e.target.parentNode;
			showDropdown(e, paymentDropdown);
		} else if (e.target.parentNode.id === 'categoryDropdown' && e.target.tagName === 'INPUT') {
			const categoryDropdown = e.target.parentNode;
			showDropdown(e, categoryDropdown);
		}
	});

	const handleClose = e => {
		const dropDownList = document.querySelectorAll('.select-dropdown');
		if (!e.target.classList.contains('select-box') && !e.target.classList.contains('option-item')) {
			dropDownList.forEach(el => {
				el.classList.remove('active');
			});
		}
	};

	window.addEventListener('click', e => handleClose(e));
}

function showDropdown(e, dropdown) {
	if (dropdown.id === 'paymentDropdown') {
		dropdown.classList.toggle('active');
		// 각 옵션 클릭시 클릭한 옵션값 인풋밸류로 할당 후 active 제거
		e.target.nextElementSibling.addEventListener('click', opt => {
			if (opt.target.tagName === 'P') {
				e.target.value = opt.target.textContent;
				dropdown.classList.remove('active');
			} else if (opt.target.tagName === 'LI') {
				e.target.value = opt.target.firstElementChild.textContent;
				dropdown.classList.remove('active');
			}
		});
	} else if (dropdown.id === 'categoryDropdown') {
		dropdown.classList.toggle('active');
		// 카테고리는 수입, 지출 리스트(ul)이 나누어져 있으므로 둘 다 이벤트리스너 등록
		const optionLists = dropdown.querySelectorAll('ul.option');
		optionLists.forEach(el => {
			el.addEventListener('click', opt => {
				if (opt.target.tagName === 'P') {
					e.target.value = opt.target.textContent;
					dropdown.classList.remove('active');
				} else if (opt.target.tagName === 'LI') {
					e.target.value = opt.target.firstElementChild.textContent;
					dropdown.classList.remove('active');
				}
			});
		});
	}
}
