import { inputBarStore } from "../../store/inputBarStore.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { initInputBarDate } from "../../init/initInputBarDate.js";

export const handleSubmitButtonClick = () => {
  appendTransactionLocalStorage();
  inputBarStore.initStore();
  initInputBar();
};

const appendTransactionLocalStorage = () => {
  const localStorageData = JSON.parse(getTransactionLocalStorage());

  if (localStorageData == null) {
    setTransactionLocalStorage(JSON.stringify([inputBarStore.getAllProperty()]));

    return;
  }

  const data = JSON.stringify([inputBarStore.getAllProperty(), ...localStorageData]);

  setTransactionLocalStorage(data);
};

const initInputBar = () => {
  const $price = document.querySelector("#input-bar__price");
  const $memo = document.querySelector("#input-bar__memo");
  const $payment = document.querySelector(".input-bar__payment-text");
  const $category = document.querySelector(".input-bar__category-text");

  initInputBarDate();
  $price.value = "";
  $memo.value = "";
  $payment.textContent = "선택하세요";
  $category.textContent = "선택하세요";
};
