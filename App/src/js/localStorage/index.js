import { setLocalStorage } from "./setLocalStorage.js";

export const localStorageInit = () => {
  const $input_checkbox = document.getElementById("input_checkbox");

  $input_checkbox.addEventListener("click", setLocalStorage);
};
