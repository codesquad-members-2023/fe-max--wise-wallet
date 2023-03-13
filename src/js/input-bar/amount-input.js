import { categoryInput } from "./dropdown.js";

export const amountInput = document.querySelector(
  ".input-bar__item-input#amount"
);
export const plusMinusInput = document.querySelector("#plus-minus-input");

amountInput.addEventListener("input", () => {
  const parsedInput = amountInput.value.replace(/,|[^0-9]/g, "");
  amountInput.value = parsedInput.replace(/(?<=\d)(?=(?:\d{3})+$)/g, ",");
});

plusMinusInput.addEventListener("change", () => {
  categoryInput.value = "선택하세요";
  categoryInput.style.color = "var(--color-primary-alt)";
});
