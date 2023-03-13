const selectorYear = document.querySelector('#selector_year');
const selectorNum = document.querySelector('#selector__num');
const selectorEng = document.querySelector('#selector__eng');
const inputDate = document.querySelector('#date-input');
const inputAmount = document.querySelector("#input_amount");
const amountBtn = document.querySelector('#selector-amount');

function setDefault() {
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const monthIndex = date.getUTCMonth();
    const day = date.getUTCDate().toString().padStart(2, '0');
    
    inputDate.value = `${year}${month}${day}`;
    document.querySelector('#selector-year').innerText = year;
    document.querySelector('#selector-num').innerText = date.getUTCMonth() + 1;
    document.querySelector('#selector-eng').innerText = monthEng[monthIndex];
    console.log(monthNum);
}

setDefault();


// inputAmount.addEventListener('input', function(e){
// 	e.value = e.value.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// })

function maxLengthCheck(object) {
    if(object.value.length > object.maxLength) object.value = object.value.slice(0, object.maxLength);
}

function clickAmountBtn() {
    if(amountBtn.src == 'src/minus_icon.svg') {
        amountBtn.src = 'src/plus_icon.svg';
    } else if(amountBtn.src == '.src/plus_icon.svg') {
        amountBtn.src = 'src/minus_icon.svg';
    }
}

amountBtn.addEventListener("click", clickAmountBtn);

