const changeButton = document.getElementById("change_btn");
const changeImage = document.getElementById("change_button");
const priceInputField = document.getElementById("price_input");
const memoInputField = document.getElementById("memo_input");
const paymentInputField = document.getElementById("payment_input");
const categoryInputField = document.getElementById("category_input");
const minusSvgPath = "./src/svg/minus.svg";
const plusSvgPath = "./src/svg/plus.svg";
const resetField = [
  priceInputField,
  memoInputField,
  paymentInputField,
  categoryInputField,
];

function setSVG(svg, path, isMinus) {
  svg.setAttribute("src", path);
  svg.setAttribute("isMinus", isMinus);
}

const addComma = (price) => {
  return parseInt(price).toLocaleString("ko-KR");
};

function resetInputBar() {
  resetField.forEach((inputFieldText) => {
    inputFieldText.value = "";
  })
};

changeButton.addEventListener("click", (e) => {
  resetInputBar();
  const currentSrc = changeImage.getAttribute("isMinus");
  const isMinus = currentSrc === "true";
  if (isMinus) {
    setSVG(changeImage, plusSvgPath, "false");
  } else {
    setSVG(changeImage, minusSvgPath, "true");
  }
});

priceInputField.addEventListener("keyup", (e) => {
  const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
  const isEmpty = e.target.value === "";

  if (isEmpty) {
    e.target.value = "";
  } else {
    e.target.value = addComma(sanitizedValue);
  }
});
