import { $$ } from '../utils/dom.js';
import { checkFormFilled } from './CheckForm.js';

const dropdowns = $$('.dropdown__wrap');

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

document.body.addEventListener('click', closeDropdownFromOutside);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', toggleDropdown);
  dropdown.querySelectorAll('.option').forEach((option) => {
    option.addEventListener('click', selectOption);
  });
});
