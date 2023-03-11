const dropdown = document.querySelector('.select-payment-dropdown');
const inputbox = document.querySelector('.select-box');
const options = document.querySelectorAll('.option-item');

const handleSelect = item => {
	dropdown.classList.remove('active');
	inputbox.value = item.children[0].innerHTML;
};
// 드롭다운 메뉴 중 옵션 하나 선택시 닫으면서 인풋창에 텍스트 입력
options.forEach(option => {
	option.addEventListener('click', () => handleSelect(option));
});
// 선택창 클릭시 드롭다운 열어주기
inputbox.addEventListener('click', () => {
	dropdown.classList.toggle('active');
});
// 선택창 외 다른 곳 클릭시 드롭다운 메뉴를 닫아주는 함수
const handleClose = e => {
	if (!e.target.classList.contains('select-box') && !e.target.classList.contains('option-item')) {
		dropdown.classList.remove('active');
	}
};

window.addEventListener('click', e => handleClose(e));
