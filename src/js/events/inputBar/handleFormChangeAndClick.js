import { inputBarStore } from "../../store/inputBarStore.js";
import { SOURCE } from "../../constants/SOURCE.js";

export const handleFormChangeAndClick = () => {
  const $submitButton = document.querySelector(".input-bar__submit-button");

  if (inputBarStore.isAllFill()) {
    $submitButton.src = SOURCE.SUBMIT_BUTTON_ACTIVE;
    $submitButton.classList.add("active");

    return;
  }

  if (!$submitButton.classList.contains("active")) return;

  $submitButton.src = SOURCE.SUBMIT_BUTTON;
  $submitButton.classList.remove("active");
};
