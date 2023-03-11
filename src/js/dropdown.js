const inputbox = document.querySelectorAll('.select-box');
// 인풋창을 눌렀을 때 드롭다운 메뉴 숨기고 선택한 항목 표시
const handleSelect = (ib, item) => {
	ib.parentNode.classList.remove('active');
	ib.value = item.children[0].innerHTML;
};
// 선택된 드롭다운 메뉴에서 옵션들을 불러온 후
// 각 옵션들이 선택되었을 때 handleSelect 함수 실행
const clickInputBox = (ib, optionItems) => {
	if (ib.parentNode.classList.contains('active')) {
		ib.parentNode.classList.remove('active');
		optionItems.forEach(opt => {
			opt.removeEventListener('click', () => handleSelect(ib, opt));
		});
	} else {
		ib.parentNode.classList.add('active');
		optionItems.forEach(opt => {
			opt.addEventListener('click', () => handleSelect(ib, opt));
		});
	}
};
// 여러 드롭다운 메뉴가 있을 때 인풋창 클릭된 드롭다운 메뉴의
// 옵션 항목들을 가져온 후 clickInputBox 함수 실행
inputbox.forEach(ib => {
	ib.addEventListener('click', () => {
		let optionList = ib.nextElementSibling;
		let optionItems = optionList.querySelectorAll('.option-item');
		clickInputBox(ib, optionItems);
	});
});
// 선택창 외 다른 곳 클릭시 드롭다운 메뉴를 닫아주는 함수
const handleClose = e => {
	if (!e.target.classList.contains('select-box') && !e.target.classList.contains('option-item')) {
		inputbox.forEach(ib => {
			ib.parentNode.classList.remove('active');
		});
	}
};
window.addEventListener('click', e => handleClose(e));
