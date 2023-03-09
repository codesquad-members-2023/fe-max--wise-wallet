const amountInput = document.querySelector(".input-bar__item-input#amount");

amountInput.addEventListener("input", () => {
  const parsedInput = amountInput.value.replace(/,|[^0-9]/g, "");
  amountInput.value = parsedInput.replace(/(?<=\d)(?=(?:\d{3})+(?!\d))/g, ",");
});
