const inputBar = document.querySelector('.input-bar-form');

const showDropdown = (e, dropdown) => {
	if (dropdown.id === 'paymentDropdown') {
		dropdown.classList.toggle('active');
		// 각 옵션 클릭시 클릭한 옵션값 인풋밸류로 할당 후 active 제거
		e.target.nextElementSibling.addEventListener('click', opt => {
			if (opt.target.tagName === 'P') {
				e.target.value = opt.target.innerText;
				dropdown.classList.remove('active');
			} else if (opt.target.tagName === 'LI') {
				e.target.value = opt.target.firstElementChild.innerText;
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
					e.target.value = opt.target.innerText;
					dropdown.classList.remove('active');
				} else if (opt.target.tagName === 'LI') {
					e.target.value = opt.target.firstElementChild.innerText;
					dropdown.classList.remove('active');
				}
			});
		});
	}
};

export const handleDropdown = () => {
	// 인풋바 영역에 이벤트 위임
	inputBar.addEventListener('click', e => {
		// 결제수단 인풋창 or 카테고리 인풋창 선택시 showDropdown 함수 실행
		if (e.target.parentNode.id === 'paymentDropdown' && e.target.tagName === 'INPUT') {
			// 결제수단 드롭다운 메뉴 div를 인자로 전달
			const paymentDropdown = e.target.parentNode;
			showDropdown(e, paymentDropdown);
		} else if (e.target.parentNode.id === 'categoryDropdown' && e.target.tagName === 'INPUT') {
			// 카테고리 드롭다운 메뉴 div를 인자로 전달
			const categoryDropdown = e.target.parentNode;
			showDropdown(e, categoryDropdown);
		}
	});
	// 드롭다운 열려있을 때 다른 영역 선택시 메뉴 닫기
	const handleClose = e => {
		const dropDownList = document.querySelectorAll('.select-dropdown');
		if (!e.target.classList.contains('select-box') && !e.target.classList.contains('option-item')) {
			dropDownList.forEach(el => {
				el.classList.remove('active');
			});
		}
	};
	window.addEventListener('click', e => handleClose(e));
};

handleDropdown();
