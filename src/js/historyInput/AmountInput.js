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
  amount.addEventListener('input', () => {
    const amountValue = amount.value.replace(/[^\d.-]/g, '');

    if (!Number.isNaN(amountValue)) {
      const formatThousandsComma = Number(amountValue).toLocaleString('ko-KR');
      amount.value = formatThousandsComma;
    }
  });
}
