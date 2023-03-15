function setDefaultInputDate() {
    const dateInput = document.querySelector('#date-input');
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const monthIndex = date.getUTCMonth();
    const day = date.getUTCDate().toString().padStart(2, '0');

    dateInput.value = `${year}${month}${day}`;

    document.querySelector('.selector-year').innerText = year;
    document.querySelector('.selector-num').innerText = date.getUTCMonth() + 1;
    document.querySelector('.selector-eng').innerText = monthEng[monthIndex];
}

const amountInput = document.querySelector('#amount-input');
amountInput.addEventListener('keyup', function(e) {
  let value = e.target.value;
  value = Number(value.replaceAll(',', ''));
  if(isNaN(value)) {         //NaN인지 판별
    amountInput.value = 0;   
  }else {                   //NaN이 아닌 경우
    const formatValue = value.toLocaleString('ko-KR');
    amountInput.value = formatValue;
  }
})

setDefaultInputDate();