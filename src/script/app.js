const $ = (selector) => document.querySelector(selector);


const init = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const monthNum = date.getUTCMonth() + 1;
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNum.toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');

    $('.selector-year').innerText = year;
    $('.selector-num').innerText = monthNum;
    $('.selector-eng').innerText = monthEng[monthNum - 1];
    $('#date-input').value = `${year}${month}${day}`
}


const prevMonth = () => {
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if($('.selector-num').innerText <= 1) {
        $('.selector-year').innerText = $('.selector-year').innerText - 1;
        $('.selector-num').innerText = 12;
        $('.selector-eng').innerText = monthEng[$('.selector-num').innerText - 1];
    } else {
        $('.selector-num').innerText = $('.selector-num').innerText - 1;
        $('.selector-eng').innerText = monthEng[$('.selector-num').innerText - 1];
    }
}
$('.prev-month').addEventListener('click', prevMonth);


const nextMonth = () => {
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if($('.selector-num').innerText >= 12) {
        $('.selector-year').innerText = Number($('.selector-year').innerText) + 1;
        $('.selector-num').innerText = 1;
        $('.selector-eng').innerText = monthEng[$('.selector-num').innerText - 1];
    } else {
        $('.selector-num').innerText = Number($('.selector-num').innerText) + 1;
        $('.selector-eng').innerText = monthEng[Number($('.selector-num').innerText) - 1];
    }
}
$('.next-month').addEventListener('click', nextMonth);


const tapNavHandler = (e) => {
    const isTapButton = e.target.classList.contains("tap-btn");
    if(isTapButton) {
        const btns = [...document.querySelectorAll('.header-taps button')];
        const taps = [...document.querySelectorAll('.main section')];

        btns.forEach(element => element.classList.remove("tap-active"));
        taps.forEach(element => element.classList.add('hidden'));

        e.target.closest("button").classList.add("tap-active");
        taps[btns.indexOf(e.target.closest("button"))].classList.remove('hidden');
    }
}
$('.header-taps').addEventListener('click', tapNavHandler);


const checkMaxLengthOfNumber = () => {
    const input = $("#date-input");
    if(input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
};
$("#date-input").addEventListener('input', checkMaxLengthOfNumber)


const setDefaultAmountInput = (e) => {
    value = Number((e.target.value).replaceAll(',', ''));
    if(isNaN(value)) {
        $('#amount-input').value = 0;   
      }else {
        const formatValue = value.toLocaleString('ko-KR');
        $('#amount-input').value = formatValue;
      }
}
$('#amount-input').addEventListener('input', setDefaultAmountInput);


const onClickPaymentsSelectBtn = () => {
    $('.payments-dropdown').classList.remove("hidden");
}
$('.payments-section').addEventListener("click", onClickPaymentsSelectBtn);


const onClickPaymentsAddBtn = () => {
    const paymentsModalTemplate = `
    <div class="payments-add-modal">
        <div class="modal-body">
            <div class="modal-input">
                <label for="payments-add-input" class="body_regular">추가하실 결제수단을 적어주세요.</label>
                <input required id="payments-add-input" type="text" placeholder="입력하세요">
            </div>
            <div class="modal-btn">
                <button class="cancel-btn bold_large">취소</button>
                <button class="add-btn">등록</button>
            </div>
        </div>
    </div>`;
    $('.body').insertAdjacentHTML("afterbegin", paymentsModalTemplate);
}
$('.payments-add').addEventListener('click', onClickPaymentsAddBtn);


const onClickModalCancelBtn = () => {
    
}


init();