import { showElement } from "../../utils/showElement.js";
import { hideElement } from "../../utils/hideElement.js";
import { getAddPaymentModalTemplate, getPaymentListChildrenTemplate } from "../../views/modal/addPayment.js";
import { inputBarStore } from "../../store/inputBarStore.js";

export const handlePaymentListClick = ({ target }) => {
  if (isInvalidClick(target)) return;

  if (isAddButtonClick(target)) {
    const $modal = document.querySelector(".modal");
    const modalTemplate = getAddPaymentModalTemplate();

    setModalTemplate($modal, modalTemplate);
    setModalButtonEvent($modal, target);
    showElement($modal);

    return;
  }

  const $dropdown = document.querySelector(".payment-dropdown");
  const $paymentText = document.querySelector(".input-bar__payment-text");

  hideElement($dropdown);
  inputBarStore.setPayment(target.closest("li").dataset.value);
  $paymentText.textContent = target.closest("li").dataset.value;
};

const isInvalidClick = (target) => target.classList.contains("payment-dropdown__ul") || target.classList.contains("payment-dropdown__list-delete");
const isAddButtonClick = (target) => target.classList.contains("payment-dropdown__add-button");

const setModalTemplate = (element, template) => {
  element.innerHTML = template;
};

const setModalButtonEvent = (element, target) => {
  const $closeButton = document.querySelector(".modal-cancel-button");
  const $confirmButton = document.querySelector(".modal-add-confirm-button");

  $closeButton.addEventListener("click", () => {
    hideElement(element);
    element.innerHTML = "";
  });

  $confirmButton.addEventListener("click", () => {
    const $input = document.querySelector(".modal-content-input").value;
    const li = document.createElement("li");
    li.classList.add("payment-dropdown__list");
    li.innerHTML = getPaymentListChildrenTemplate($input);
    target.parentNode.insertBefore(li, target);

    hideElement(element);
    element.innerHTML = "";
  });
};
