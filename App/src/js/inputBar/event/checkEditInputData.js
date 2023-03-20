import { getData } from "../../localStorage/getData.js";

export const checkEditInputData = () => {
  const $input_checkbox = document.querySelector("#input_bar #input_checkbox");

  const key = document.querySelector(".selected_list .uniqueKey").value;
  const data = getData(key);
  const uniqueKey = key;
  const date = document.getElementById("input_date");
  const price = document.getElementById("input_price");
  const isPositive = document.getElementById("price_toggle");
  const content = document.getElementById("input_content");
  const payment = document.getElementById("payment_value");
  const category_select = document.getElementById("category_value");
  const obj = {
    uniqueKey: uniqueKey,
    date: date.value,
    price: Number(price.value.replaceAll(",", "")),
    isPositive: isPositive.checked,
    content: content.value,
    payment: payment.value,
    category_select: category_select.value,
  };

  if (data === JSON.stringify(obj)) {
    $input_checkbox.disabled = true;
    $input_checkbox.classList.remove("active_Btn");
  } else {
    $input_checkbox.disabled = false;
    $input_checkbox.classList.add("active_Btn");
  }
};
