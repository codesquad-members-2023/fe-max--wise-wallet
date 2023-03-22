import { getFormattedNumber } from '../utils/utils.js';

export function handleAmountInput(amount) {
  preventMinusInput(amount);
  formatNumberInput(amount);
}

function preventMinusInput(amount) {
  amount.addEventListener('keydown', (event) => {
    if (event.key === '-') {
      event.preventDefault();
    }
  });
}

function formatNumberInput(amount) {
  const amountInput = amount;
  amountInput.addEventListener('input', () => {
    if (!Number.isNaN(amountInput.value)) {
      amountInput.value = getFormattedNumber(amountInput.value);
    }
  });
}
