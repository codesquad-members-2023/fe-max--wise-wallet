const changeButton = document.getElementById("change_btn");
const changeImage = document.getElementById("change_button");
const priceInputField = document.getElementById("price_input");
const memoInputField = document.getElementById("memo_input");
const paymentInputField = document.getElementById("payment_input");
const categoryInputField = document.getElementById("category_input");
const checkButton = document.getElementById("check_btn");
const expenseSvgPath = "./src/svg/expense.svg";
const incomeSvgPath = "./src/svg/income.svg";
const resetField = [
  priceInputField,
  memoInputField,
  paymentInputField,
  categoryInputField,
];

function setSVG(svg, path, isExpense) {
  svg.setAttribute("src", path);
  svg.setAttribute("isExpense", isExpense);
}

const addComma = (price) => {
  return parseInt(price).toLocaleString("ko-KR");
};

function resetInputBar() {
  resetField.forEach((inputFieldText) => {
    inputFieldText.value = "";
  });
}

changeButton.addEventListener("click", (e) => {
  resetInputBar();
  const currentSrc = changeImage.getAttribute("isExpense");
  const isExpense = currentSrc === "true";
  if (isExpense) {
    setSVG(changeImage, incomeSvgPath, "false");
  } else {
    setSVG(changeImage, expenseSvgPath, "true");
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

checkButton.addEventListener("click", function () {
  const isExpense = changeImage.getAttribute("isExpense");
  const date = document.getElementById("input_date").value;
  const price = document.getElementById("price_input").value;
  const memo = document.getElementById("memo_input").value;
  const payment = document.getElementById("payment_input").value;
  const category = document.getElementById("category_input").value;

  const history = {
    isExpense: isExpense,
    date: date,
    price: price,
    memo: memo,
    payment: payment,
    category: category,
  };

  let histories = JSON.parse(localStorage.getItem("histories")) || [];

  histories.push(history);
  localStorage.setItem("histories", JSON.stringify(histories));
});

const histories = JSON.parse(localStorage.getItem('histories')) || [];

histories.forEach(function(history) {
  // expense 객체의 정보를 화면에 출력
  
});
