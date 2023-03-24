import { getFormattedNumber } from '../utils/utils.js';
import { formInput } from '../utils/elements.js';

export function checkForm() {
  const { $historyForm, $amount } = formInput;

  $historyForm.addEventListener('input', (e) => {
    if (e.target.id === 'amount' && !Number.isNaN($amount.value)) {
      preventAmountInput($amount);
      $amount.value = getFormattedNumber($amount.value);
    }

    checkFormFilled();
  });
}

export function checkFormFilled() {
  const isFilled =
    formInput.$date.value &&
    formInput.$amount.value &&
    formInput.$description.value &&
    formInput.$paymentMethod.value &&
    formInput.$category.value;

  if (isFilled) {
    formInput.$submitBtn.disabled = false;
    formInput.$submitBtn.classList.add('active');
  } else {
    formInput.$submitBtn.disabled = true;
    formInput.$submitBtn.classList.remove('active');
  }
}

function preventAmountInput(amount) {
  amount.addEventListener('keydown', (e) => {
    if (e.keyCode === 189) {
      e.preventDefault();
    }
  });
}
