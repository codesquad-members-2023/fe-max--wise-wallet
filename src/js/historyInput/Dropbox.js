import { $, $$ } from '../utils/utils.js';
import { checkFormFilled } from './CheckForm.js';

const dropdowns = $$('.dropdown__wrap');
const amountButton = $('.history__form-amount button');

const toggleDropdown = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle('opened');
};

const selectOption = (e) => {
  const input = e.currentTarget
    .closest('.dropdown__wrap')
    .querySelector('input');
  input.value = e.currentTarget.textContent.trim();
  checkFormFilled();
};

const closeDropdownFromOutside = () => {
  dropdowns.forEach((dropdown) => {
    if (dropdown.classList.contains('opened')) {
      dropdown.classList.remove('opened');
    }
  });
};

const setDropdownListeners = () => {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', toggleDropdown);
    dropdown.querySelectorAll('.option').forEach((option) => {
      option.addEventListener('click', selectOption);
    });
  });
};

const changeCategoryList = () => {
  const buttonImg = $('.history__form-amount button img');
  const optionsList = $('.history__form-category ul');
  const categoryInput = $('.history__form-category input');
  const incomeCategoryList = optionsList.innerHTML;
  const expenditureCategoryList = `
  <li class="option">월급</li>
  <li class="option">용돈</li>
  <li class="option">기타수입</li>
`;

  categoryInput.value = '';

  if (
    buttonImg.attributes.src.value === './src/assets/button_spending_minus.svg'
  ) {
    optionsList.innerHTML = expenditureCategoryList;
    buttonImg.attributes.src.value = './src/assets/button_spending_plus.svg';
  } else {
    optionsList.innerHTML = incomeCategoryList;
    buttonImg.attributes.src.value = './src/assets/button_spending_minus.svg';
  }
  setDropdownListeners();
};

setDropdownListeners();
document.body.addEventListener('click', closeDropdownFromOutside);
amountButton.addEventListener('click', changeCategoryList);
