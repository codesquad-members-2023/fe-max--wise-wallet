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

function addList(groupedData) {
  const listWrap = document.querySelector('.history-lists__wrap');
  listWrap.innerHTML = '';

  Object.entries(groupedData).forEach(([dateData, listData]) => {
    const dateMonth = Number(dateData.substring(4, 6));
    const dateDay = dateData.substring(6, 8);
    const dayOfWeek = getDayOfWeek(formatDate(dateData));

    let expenses = 0;
    let incomes = 0;

    const templateContentWrap = document.createElement('ul');
    templateContentWrap.className = 'history-list__item body-medium';

    listData.forEach((item) => {
      const isIncome = item.incomeOrExpenditure === 'income';
      const isExpenditure = item.incomeOrExpenditure === 'expenditure';

      if (isIncome) incomes += Number(item.amount);
      if (isExpenditure) expenses -= Number(item.amount);

      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="tag tag--life bold-medium">${item.category}</div>
        <div class="history-list__item-content">
          ${item.description}
        </div>
        <div class="history-list__item-payment-method">${
          item.paymentMethod
        }</div>
        <div class="history-list__item-amount plus-color">
          ${getFormattedNumber(item.amount)}원
        </div>
      `;

      templateContentWrap.appendChild(listItem);
    });

    const templateListTop = `
      <div class="history-list__top">
        <div class="history-list__info bold-medium">
          <div class="history-list__info-dateday">
            <span class="history-list__info-date">${dateMonth}월 ${dateDay}일</span>
            <span class="history-list__info-day">${dayOfWeek}</span>
          </div>
          <div class="history-list-info__total">
            <div class="history-list-info__expense">
              수입 <span>${getFormattedNumber(String(incomes))}원</span>
            </div>
            <div class="history-list-info__income">
              지출 <span>${getFormattedNumber(String(expenses))}원</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const listTop = document.createElement('div');
    listTop.innerHTML = templateListTop + templateContentWrap.outerHTML;

    listWrap.appendChild(listTop);
  });
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
