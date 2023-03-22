export const $ = (selector, doc = document) => doc.querySelector(selector);
export const $$ = (selector, doc = document) => doc.querySelectorAll(selector);

export function getFormattedNumber(amount) {
  const amountValue = amount.replace(/[^\d.-]/g, '');
  const formatThousandsComma = Number(amountValue).toLocaleString('ko-KR');

  return formatThousandsComma;
}
