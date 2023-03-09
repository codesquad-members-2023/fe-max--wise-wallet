//- Dropdowns - payment method and category
const paymentMethodDropdown = document.querySelector(
  "#payment-method-dropdown"
);
const paymentMethodOptionsContainer = paymentMethodDropdown.nextElementSibling;
const paymentMethodOptions =
  paymentMethodOptionsContainer.querySelectorAll(".option");
const paymentMethodInputDisplay = paymentMethodDropdown.querySelector(
  ".input-bar__item-input"
);
const categoryDropdown = document.querySelector("#category-dropdown");
const categoryOptionsContainer = categoryDropdown.nextElementSibling;
const categoryOptions = categoryOptionsContainer.querySelectorAll(".option");
const categoryInputDisplay = categoryDropdown.querySelector(
  ".input-bar__item-input"
);

//- Close dropdown when clicked outside.
window.addEventListener("click", (evt) => {
  const el = evt.target;

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

    //- Add Payment Method
    if (selectedOption === "추가하기") {
      paymentMethodInputDisplay.innerText = "선택하세요";
      paymentMethodInputDisplay.style.color = "var(--color-primary-alt)";
      console.log("modal!"); // open up modal!!!!!!!!!
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
