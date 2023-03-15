import { plusMinusInput } from "./amount-input.js";
import { newEntryForm } from "./index.js";

//- Payment Method Dropdown Nodes
const paymentMethodDropdown = document.querySelector(
  "#payment-method-dropdown"
);
const paymentMethodOptionsContainer = paymentMethodDropdown.nextElementSibling;
const addPaymentMethodOption = paymentMethodOptionsContainer.querySelector(
  "#add-payment-method-option"
);
const paymentMethodInput = paymentMethodDropdown.querySelector(
  ".input-bar__item-input"
);

//- Category Dropdown Nodes
const categoryDropdown = document.querySelector("#category-dropdown");
const categoryOptionsContainerExpense = document.querySelector(
  "#category-dropdown ~ .expense"
);
const categoryOptionsContainerIncome = document.querySelector(
  "#category-dropdown ~ .income"
);
const categoryOptionsExpense =
  categoryOptionsContainerExpense.querySelectorAll(".option");
const categoryOptionsIncome =
  categoryOptionsContainerIncome.querySelectorAll(".option");
export const categoryInput = categoryDropdown.querySelector(
  ".input-bar__item-input"
);

//- New Payment Method Modal
const newPaymentMethodModal = document.querySelector(
  "#new-payment-method-modal"
);
const newPaymentMethodForm = newPaymentMethodModal.querySelector("form");
const newPaymentMethodCancelBtn =
  newPaymentMethodModal.querySelector(".cancel-btn");

//- Delete Payment Method Confirmation Modal
const deletePaymentMethodModal = document.querySelector(
  "#delete-payment-method-modal"
);
const deletePaymentMethodForm = deletePaymentMethodModal.querySelector("form");
const targetPaymentMethodModalBody = deletePaymentMethodForm.querySelector(
  ".modal-content .modal-body"
);
const deletePaymentMethodCancelBtn =
  deletePaymentMethodModal.querySelector(".cancel-btn");

//- Click outside to close
window.addEventListener("click", (evt) => {
  const el = evt.target;

  //- Close dropdowns
  if (
    !paymentMethodDropdown.contains(el) &&
    !paymentMethodOptionsContainer.contains(el) &&
    !categoryDropdown.contains(el) &&
    !categoryOptionsContainerExpense.contains(el) &&
    !categoryOptionsContainerIncome.contains(el) &&
    !el?.classList.contains("option-delete-btn") &&
    !el?.parentElement?.classList.contains("option-delete-btn")
  ) {
    paymentMethodOptionsContainer.classList.remove("is-active");
    categoryOptionsContainerExpense.classList.remove("is-active");
    categoryOptionsContainerIncome.classList.remove("is-active");
  }

  //- Close modal
  if (el === newPaymentMethodModal || el === deletePaymentMethodModal) {
    el.classList.remove("is-active");
  }
});

//- Payment Method Dropdown
paymentMethodDropdown.addEventListener("click", () => {
  categoryOptionsContainerExpense.classList.remove("is-active");
  categoryOptionsContainerIncome.classList.remove("is-active");
  paymentMethodOptionsContainer.classList.toggle("is-active");
});

//- Payment Method Option
paymentMethodOptionsContainer.addEventListener("click", (evt) => {
  const el = evt.target;
  const targetOption = el.closest(".option");
  const paymentMethod = targetOption?.dataset?.value;

  //- If clicked on delete button.
  if (el.tagName === "IMG" || el.tagName === "BUTTON") {
    deletePaymentMethodModal.classList.add("is-active");
    targetPaymentMethodModalBody.value = paymentMethod;
    return;
  }

  //- If selected a payment method.
  if (el.tagName === "SPAN") {
    //- Open Payment Method Modal
    if (paymentMethod === "추가하기") {
      paymentMethodInput.value = "선택하세요";
      paymentMethodInput.style.color = "var(--color-primary-alt)";
      newPaymentMethodModal.classList.add("is-active");
      return;
    }

    paymentMethodInput.value = paymentMethod;
    paymentMethodInput.style.color = "var(--color-primary)";
    paymentMethodOptionsContainer.classList.remove("is-active");
    newEntryForm.dispatchEvent(new Event("change", { bubbles: true }));
  }
});

//- Add New Payment Method
newPaymentMethodForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newPaymentMethod =
    newPaymentMethodForm["new-payment-method"].value.trim();

  const newLi = document.createElement("li");
  newLi.classList.add("option");
  newLi.dataset.value = newPaymentMethod;
  newLi.innerHTML = `
    <span>${newPaymentMethod}</span>
    <button type="button" class="option-delete-btn">
      <img
        src="src/assets/icons/close.svg"
        alt="Remove Payment Method" />
    </button>
  `;
  paymentMethodOptionsContainer.insertBefore(newLi, addPaymentMethodOption);

  newPaymentMethodModal.classList.remove("is-active");
});

//- Delete Payment Method
deletePaymentMethodForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const paymentMethodOptions =
    paymentMethodOptionsContainer.querySelectorAll(".option");
  const targetLi = [...paymentMethodOptions].filter(
    (li) => li.dataset.value === targetPaymentMethodModalBody.value
  );
  targetLi[0].remove();
  paymentMethodInput.value = "";
  newEntryForm.dispatchEvent(new Event("change", { bubbles: true }));
  deletePaymentMethodModal.classList.remove("is-active");
});

//- Close New Payment Method Modal
newPaymentMethodCancelBtn.addEventListener("click", () => {
  newPaymentMethodModal.classList.remove("is-active");
});

//- Close Delete Payment Method Modal
deletePaymentMethodCancelBtn.addEventListener("click", () => {
  deletePaymentMethodModal.classList.remove("is-active");
});

//- Category Dropdown
categoryDropdown.addEventListener("click", () => {
  paymentMethodOptionsContainer.classList.remove("is-active");
  if (plusMinusInput.checked) {
    categoryOptionsContainerExpense.classList.remove("is-active");
    categoryOptionsContainerIncome.classList.add("is-active");
  } else {
    categoryOptionsContainerIncome.classList.remove("is-active");
    categoryOptionsContainerExpense.classList.add("is-active");
  }
});

//- Category Option
[...categoryOptionsExpense, ...categoryOptionsIncome].forEach((opt) => {
  opt.addEventListener("click", () => {
    const selectedOption = opt.dataset.value;
    categoryInput.value = selectedOption;
    categoryInput.style.color = "var(--color-primary)";
    categoryOptionsContainerExpense.classList.remove("is-active");
    categoryOptionsContainerIncome.classList.remove("is-active");
    newEntryForm.dispatchEvent(new Event("change", { bubbles: true }));
  });
});
