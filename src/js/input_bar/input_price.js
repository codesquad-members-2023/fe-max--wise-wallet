import { common } from "./input_bar_common.js";

function setSVG(svg, path, isExpense) {
  svg.setAttribute("src", path);
  svg.setAttribute("isExpense", isExpense);
}

function addComma(price) {
  return parseInt(price).toLocaleString("ko-KR");
}

export function resetInputBar() {
  const resetField = [
    common.price,
    common.memo,
    common.payment,
    common.category,
  ];
  resetField.forEach((inputFieldText) => {
    inputFieldText.value = "";
  });
}

common.changeButton.addEventListener("click", () => {
  resetInputBar();
  const currentState = common.changeImage.getAttribute("isExpense");
  const isExpense = currentState === "true";
  if (isExpense) {
    setSVG(common.changeImage, common.incomeSvgPath, "false");
  } else {
    setSVG(common.changeImage, common.expenseSvgPath, "true");
  }
});

common.price.addEventListener("keyup", (e) => {
  const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
  const isEmpty = sanitizedValue === "";

  if (isEmpty) {
    e.target.value = "";
  } else {
    e.target.value = addComma(sanitizedValue);
  }
});
