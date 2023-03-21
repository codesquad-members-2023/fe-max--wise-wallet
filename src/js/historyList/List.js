import { $, getFormattedNumber } from '../utils/utils.js';

const dateInput = $('.history__form-date input');
const amountInput = $('.history__form-amount input');
const descriptionInput = $('.history__form-description input');
const paymentMethodInput = $('.history__form-payment-method input');
const categoryInput = $('.history__form-category input');
const incomeOrExpenditureButton = $('.history__form-amount button img');
const submitButton = $('.history__form-button');

const itemList = [];

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const groupedData = getData();
  addList(groupedData);
  // 인풋 초기화 함수 추가하기
});

function getData() {
  const now = new Date();
  const id = now.getTime();
  const date = dateInput.value;
  const incomeOrExpenditure =
    incomeOrExpenditureButton.getAttribute('data-value');
  const amount = amountInput.value.replaceAll(',', '');
  const description = descriptionInput.value;
  const paymentMethod = paymentMethodInput.value;
  const category = categoryInput.value;
  const newItem = {
    id,
    date,
    incomeOrExpenditure,
    amount,
    description,
    paymentMethod,
    category,
  };

  itemList.push(newItem);
  return makeGroupDate(itemList);
}

function makeGroupDate(list) {
  const groupedData = list.reduce((accumulator, currentValue) => {
    const { date } = currentValue;
    if (!accumulator[date]) {
      accumulator[date] = [];
    }
    accumulator[date].push(currentValue);
    return accumulator;
  }, {});

  return groupedData;
}

function getDayOfWeek(dateValue) {
  const date = new Date(dateValue);
  const dayOfWeek = date.getDay();
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return days[dayOfWeek];
}

function formatDate(dateValue) {
  const year = String(dateValue).slice(0, 4);
  const month = String(dateValue).slice(4, 6);
  const day = String(dateValue).slice(6, 8);

  return `${year}-${month}-${day}`;
}
