import { $, getFormattedNumber } from '../utils/utils.js';
import { getDayOfWeek, formatDate } from '../utils/date.js';
import { formInput } from '../utils/elements.js';

const $submitButton = $('.history__form-button');
const $listWrap = $('.history-lists__wrap');

$submitButton.addEventListener('click', addItemToList);

function addItemToList(e) {
  e.preventDefault();
  const item = getData();
  renderList(item);
  resetInput();
}

function createItemList() {
  const itemList = [];

  function addItem(newItem) {
    itemList.push(newItem);
  }

  function getItemList() {
    return itemList;
  }

  return {
    addItem,
    getItemList,
  };
}

const itemListManager = createItemList();

function getData() {
  const now = new Date();

  const newItem = {
    id: now.getTime(),
    date: formInput.$date.value,
    incomeOrExpenditure: formInput.$amountIcon.getAttribute('data-value'),
    amount: formInput.$amount.value.replaceAll(',', ''),
    description: formInput.$description.value,
    paymentMethod: formInput.$paymentMethod.value,
    category: formInput.$category.value,
  };

  itemListManager.addItem(newItem);
  return makeGroupDate(itemListManager.getItemList());
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

function createListItem(item) {
  const { isIncome, isExpenditure } = getItemType(item);

  let amount = getFormattedNumber(`${item.amount}원`);
  if (isExpenditure) amount = `-${amount}`;

  const listItem = document.createElement('li');
  const contentHTML = `
    <div class="tag tag--life bold-medium">${item.category}</div>
    <div class="history-list__item-content">
      ${item.description}
    </div>
    <div class="history-list__item-payment-method">${item.paymentMethod}</div>
    <div class="history-list__item-amount ${
      isIncome ? 'plus-color' : 'minus-color'
    }">
      ${amount}원
    </div>
  `;
  listItem.insertAdjacentHTML('beforeend', contentHTML);

  return listItem;
}

function createListTop(dateData, listData) {
  const dateMonth = Number(dateData.substring(4, 6));
  const dateDay = dateData.substring(6, 8);
  const dayOfWeek = getDayOfWeek(formatDate(dateData));

  let expenses = 0;
  let incomes = 0;

  listData.forEach((item) => {
    const { isIncome, isExpenditure } = getItemType(item);

    if (isIncome) incomes += Number(item.amount);
    if (isExpenditure) expenses -= Number(item.amount);
  });

  const templateContentWrap = document.createElement('ul');
  templateContentWrap.className = 'history-list__item body-medium';

  listData.forEach((item) => {
    const listItem = createListItem(item);
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
            지출 <span>${getFormattedNumber(String(expenses))}원</span>
          </div>
          <div class="history-list-info__income">
            수입 <span>${getFormattedNumber(String(incomes))}원</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const listTop = document.createElement('div');
  listTop.insertAdjacentHTML('beforeend', templateListTop);
  listTop.appendChild(templateContentWrap);

  return listTop;
}

function renderList(groupedData) {
  clearList();

  Object.entries(groupedData).forEach(([dateData, listData]) => {
    const listTop = createListTop(dateData, listData);
    $listWrap.appendChild(listTop);
  });
}

function getItemType(item) {
  const isIncome = item.incomeOrExpenditure === 'income';
  const isExpenditure = item.incomeOrExpenditure === 'expenditure';

  return { isIncome, isExpenditure };
}

function clearList() {
  $listWrap.innerHTML = '';
}

function resetInput() {
  formInput.$historyForm.reset();
}
