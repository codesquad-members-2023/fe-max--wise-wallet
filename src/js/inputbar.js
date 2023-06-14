export function inputbarInit() {
  showCurrentDate();
  addComma();
  toggleDropdown('.payment__dropdown', '.payment__select', 'show');
  toggleDropdown('.category__dropdown', '.category__select', 'show');
  changeCategoryDropdown();
  toggleCategoryDropdown();
  setInputValue('#payment__input', '.payment__select span');
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = year + month + day;
  return formattedDate;
}

function showCurrentDate() {
  const input = document.querySelector('#date__input');
  input.value = getCurrentDate();
}

function addComma() {
  const input = document.querySelector('#price__input');

  input.addEventListener('input', function () {
    const inputValue = input.value.replace(/,/g, '');
    const formattedValue = Number(inputValue).toLocaleString();
    input.value = formattedValue;
  });
}

function toggleDropdown(clickClassName, dropdownClassName, addClassName) {
  const clickTarget = document.querySelector(clickClassName);
  const dropdownContent = document.querySelector(dropdownClassName);

  clickTarget.addEventListener('click', () => {
    dropdownContent.classList.toggle(addClassName);
  });
  hideDropdown(clickTarget, dropdownContent, addClassName);
}

function hideDropdown(clickTarget, dropdownContent, addClassName) {
  document.addEventListener('click', (e) => {
    if (!clickTarget.contains(e.target)) {
      dropdownContent.classList.remove(addClassName);
    }
  });
}

function setInputValue(inputId, dropdownClassName) {
  const input = document.querySelector(inputId);
  const dropdownEls = document.querySelectorAll(dropdownClassName);

  dropdownEls.forEach((option) => {
    option.addEventListener('click', () => {
      input.value = option.textContent;
    });
  });
}

function toggleCategoryDropdown() {
  const buttonImg = document.querySelector('#price__button');

  buttonImg.addEventListener('click', () => {
    buttonImg.classList.toggle('price__minus__button');
    buttonImg.classList.toggle('price__plus__button');
    changeCategoryDropdown();
    setInputValue('#category__input', '.category__select li');
    initInput();
    showCurrentDate();
  });
}

function changeCategoryDropdown() {
  const income = [
    '생활',
    '식비',
    '교통',
    '쇼핑/뷰티',
    '의료/건강',
    '문화/여가',
    '미분류'
  ];
  const expenditure = ['월급', '용돈', '기타수입'];
  const dropdownContent = document.querySelector('.category__select');
  const buttonImg = document.querySelector('#price__button');

  dropdownContent.innerHTML = '';
  if (buttonImg.classList.contains('price__minus__button')) {
    for (let i = 0; i < income.length; i++) {
      const option = document.createElement('li');
      option.classList.add('option');
      option.textContent = income[i];
      dropdownContent.appendChild(option);
    }
  } else if (buttonImg.classList.contains('price__plus__button')) {
    for (let i = 0; i < expenditure.length; i++) {
      const option = document.createElement('li');
      option.classList.add('option');
      option.textContent = expenditure[i];
      dropdownContent.appendChild(option);
    }
  }
}

function initInput() {
  const inputIds = [
    '#price__input',
    '#memo__input',
    '#payment__input',
    '#category__input'
  ];

  inputIds.forEach((inputId) => {
    const input = document.querySelector(inputId);
    if (input) {
      input.value = '';
    }
  });
}
