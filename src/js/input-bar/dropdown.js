//- Dropdowns - Payment Method and Category
const paymentMethodDropdown = document.querySelector(
  "#payment-method-dropdown"
);
const paymentMethodOptionsContainer = paymentMethodDropdown.nextElementSibling;
const paymentMethodOptions =
  paymentMethodOptionsContainer.querySelectorAll(".option");
const addPaymentMethodOption = paymentMethodOptionsContainer.querySelector(
  "#add-payment-method-option"
);
const paymentMethodInputDisplay = paymentMethodDropdown.querySelector(
  ".input-bar__item-input"
);
const categoryDropdown = document.querySelector("#category-dropdown");
const categoryOptionsContainer = categoryDropdown.nextElementSibling;
const categoryOptions = categoryOptionsContainer.querySelectorAll(".option");
const categoryInputDisplay = categoryDropdown.querySelector(
  ".input-bar__item-input"
);

//- New Payment Method Modal
const newPaymentMethodModal = document.querySelector(
  ".new-payment-method-modal"
);
const newPaymentMethodForm = newPaymentMethodModal.querySelector("form");
const modalCancelBtn = newPaymentMethodModal.querySelector(".cancel-btn");

//- Click Outside to Close
window.addEventListener("click", (evt) => {
  const el = evt.target;

  //- Close dropdowns
  if (
    !paymentMethodDropdown.contains(el) &&
    !paymentMethodOptionsContainer.contains(el) &&
    !categoryDropdown.contains(el) &&
    !categoryOptionsContainer.contains(el) &&
    !el?.classList.contains(".option-delete-btn") &&
    !el?.parentElement?.classList.contains("option-delete-btn")
  ) {
    paymentMethodOptionsContainer.classList.remove("is-active");
    categoryOptionsContainer.classList.remove("is-active");
  }

  //- Close modal
  if (el === newPaymentMethodModal) {
    newPaymentMethodModal.classList.remove("is-active");
  }
});

//- Payment Method Dropdown
paymentMethodDropdown.addEventListener("click", () => {
  categoryOptionsContainer.classList.remove("is-active");
  paymentMethodOptionsContainer.classList.toggle("is-active");
});

//- Payment Method Option
paymentMethodOptions.forEach((opt) => {
  const deleteBtn = opt.querySelector(".option-delete-btn");
  opt.addEventListener("click", (evt) => {
    //- Delete Option
    if (deleteBtn?.contains(evt.target)) {
      opt.remove();
      return;
    }

    const selectedOption = opt.dataset.value;

    //- Open Payment Method Modal
    if (selectedOption === "추가하기") {
      paymentMethodInputDisplay.innerText = "선택하세요";
      paymentMethodInputDisplay.style.color = "var(--color-primary-alt)";
      newPaymentMethodModal.classList.add("is-active");
      return;
    }

    paymentMethodInputDisplay.innerText = selectedOption;
    paymentMethodInputDisplay.style.color = "var(--color-primary)";
    paymentMethodOptionsContainer.classList.remove("is-active");
  });
});

//- Category Dropdown
categoryDropdown.addEventListener("click", () => {
  paymentMethodOptionsContainer.classList.remove("is-active");
  categoryOptionsContainer.classList.toggle("is-active");
});

//- Category Option
categoryOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    const selectedOption = opt.dataset.value;

    categoryInputDisplay.innerText = selectedOption;
    categoryInputDisplay.style.color = "var(--color-primary)";
    categoryOptionsContainer.classList.remove("is-active");
  });
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
  newLi.addEventListener("click", (evt) => {
    const deleteBtn = newLi.querySelector(".option-delete-btn");
    if (deleteBtn.contains(evt.target)) {
      newLi.remove();
    }
  });

  paymentMethodOptionsContainer.insertBefore(newLi, addPaymentMethodOption);

  newPaymentMethodModal.classList.remove("is-active");
});

//- Close Modal
modalCancelBtn.addEventListener("click", () => {
  newPaymentMethodModal.classList.remove("is-active");
});
