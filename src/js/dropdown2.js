const inputBar = document.querySelector('.input-bar-form');
const dropDown = document.querySelectorAll('.select-dropdown');

inputBar.addEventListener('click', e => {
	// 결제수단 인풋박스 클릭시 active 토글
	if (e.target.parentNode.id === 'paymentDropdown' && e.target.tagName === 'INPUT') {
		e.target.parentNode.classList.toggle('active');
		// 옵션 클릭시 클릭한 옵션값 인풋밸류로 할당 후 active 제거
		e.target.nextElementSibling.addEventListener('click', opt => {
			if (opt.target.tagName === 'P') {
				e.target.value = opt.target.innerText;
				e.target.parentNode.classList.remove('active');
			} else if (opt.target.tagName === 'LI') {
				e.target.value = opt.target.firstElementChild.innerText;
				e.target.parentNode.classList.remove('active');
			}
		});
	} else if (e.target.parentNode.id === 'categoryDropdown' && e.target.tagName === 'INPUT') {
		e.target.parentNode.classList.toggle('active');
		e.target.nextElementSibling.addEventListener('click', opt => {
			if (opt.target.tagName === 'P') {
				e.target.value = opt.target.innerText;
				e.target.parentNode.classList.remove('active');
			} else if (opt.target.tagName === 'LI') {
				e.target.value = opt.target.firstElementChild.innerText;
				e.target.parentNode.classList.remove('active');
			}
		});
	}
});
// 드롭다운 열려있을 때 다른 영역 선택시 메뉴 닫기
const handleClose = e => {
	if (!e.target.classList.contains('select-box') && !e.target.classList.contains('option-item')) {
		dropDown.forEach(el => {
			el.classList.remove('active');
		});
	}
};
window.addEventListener('click', e => handleClose(e));
