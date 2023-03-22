import { $ } from '../utils/utils.js';
import { handleAmountInput } from './AmountInput.js';

export function checkForm() {
  const historyForm = $('.history__form');
  const amount = $('.history__form-amount input');

  historyForm.addEventListener('input', () => {
    handleAmountInput(amount);
    checkFormFilled(amount);
  });
}

export function checkFormFilled() {
  const date = $('.history__form-date input').value;
  const amount = $('.history__form-amount input').value;
  const description = $('.history__form-description input').value;
  const paymentMethod = $('.history__form-payment-method input').value;
  const category = $('.history__form-category input').value;

  const isFilled = date && amount && description && paymentMethod && category;

  if (isFilled) {
    $('.history__form-button').disabled = false;
    $('.history__form-button').classList.add('active');
  } else {
    $('.history__form-button').disabled = true;
    $('.history__form-button').classList.remove('active');
  }
}
