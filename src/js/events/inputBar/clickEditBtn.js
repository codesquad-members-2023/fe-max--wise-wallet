import { $ } from "../../utils/dom.js";
import { inputStore } from "../../store/inputStore.js";
import { getCurrentTime } from "../../utils/getCurrentTime.js";
import { render } from "../../utils/render.js";

export const clickEditBtn = () => {
  const dateIn = document.querySelector("#date-input");
  const priceIn = document.querySelector("#price-input");
  const memoIn = document.querySelector("#memo-input");
  const typeIn = document.querySelector("#plus-minus-btn");
  const paymentIn = document.querySelector(".payment-select-head").innerText;
  const categoryIn = document.querySelector(".category-select-head").innerText;

  const storedValue = {
    creationTime: getCurrentTime(),
    type: typeIn.checked,
    date: dateIn.value,
    price: priceIn.value,
    memo: memoIn.value,
    paymentIn: paymentIn,
    categoryIn: categoryIn,
  };

  if (!$("#edit-btn").checked) {
    //
    inputStore.generateList(storedValue);
    console.log(inputStore.listArray);
    render()

  }
};
