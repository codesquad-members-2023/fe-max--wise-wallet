export function inputbarInit() {
  showCurrentDate();
  addComma();
  toggleDropdown('.payment__dropdown', '.payment__select', 'show');
  toggleDropdown('.category__dropdown', '.category__select', 'show');
  changePriceButton();
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

function changePriceButton() {
  const priceButton = document.querySelector('.price__button');
  const buttonImg = document.querySelector('#price__button');

  priceButton.addEventListener('click', (e) => {
    buttonImg.classList.toggle('price__minus__button');
    buttonImg.classList.toggle('price__plus__button');
  });
}

function changeCategoryDropdown() {}
