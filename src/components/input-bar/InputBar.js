import {
  paymentMethods,
  expenseCategories,
  incomeCategories,
} from "../../store/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <section class="input-bar">
    <form action="#">
      <label class="input-bar__item" id="input-bar-date" for="date">
        <div class="input-bar__item-name">일자</div>
        <input
          type="date"
          class="input-bar__item-input"
          id="date-input"
          name="date" />
      </label>

      <label class="input-bar__item" id="input-bar-amount" for="amount">
        <div class="input-bar__item-name">금액</div>
        <div class="input-bar__item-input__container">
          <label class="is-expense-container" for="is-expense-input">
            <input
              type="checkbox"
              name="is-expense"
              id="is-expense-input" 
              checked />
            <img src="src/assets/icons/minus.svg" alt="Minus Sign" />
            <img src="src/assets/icons/plus.svg" alt="Plus Sign" />
          </label>

          <input
            type="text"
            placeholder="0"
            class="input-bar__item-input"
            id="amount-input"
            name="amount"
            required />
          <span>원</span>
        </div>
      </label>

      <label class="input-bar__item" id="input-bar-content" for="content">
        <div class="input-bar__item-name">내용</div>
        <input
          type="text"
          placeholder="입력하세요"
          class="input-bar__item-input"
          id="content-input"
          name="content"
          required />
      </label>

      <drop-down
        class="input-bar__item" 
        id="input-bar-payment-method" 
        for="payment-method" 
        name="payment-method"
        data-options=${JSON.stringify(paymentMethods)}>
      </drop-down>

      <drop-down 
        class="input-bar__item" 
        id="input-bar-category" 
        for="category" 
        name="category"
        data-options=${JSON.stringify(expenseCategories)}>
      </drop-down>

      <button type="submit" class="entry-submit-btn" disabled>
        <img src="src/assets/icons/check.svg" alt="Submit" />
      </button>
    </form>
  </section>

  <style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .input-bar {
      width: var(--layout-inner-width);
      display: flex;
      justify-content: center;
      position: absolute;
      top: -32px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .input-bar > form {
      height: 76px;
      padding: 16px 24px;
      display: flex;
      background-color: var(--color-white);
      border: 1px solid var(--color-primary);
      border-radius: var(--radius-primary);
      box-shadow: var(--shadow);
    }
    
    .input-bar__item {
      height: 44px;
      padding-inline: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      border-right: 1px solid var(--color-primary);
      color: var(--color-primary);
    }
    
    .input-bar__item:first-child {
      padding-left: 0;
    }
    
    .input-bar__item:nth-last-child(2) {
      border-right: none;
    }
    
    .input-bar__item-name {
      height: 16px;
      color: var(--color-primary-alt);
      font-size: var(--fs-bold-regular);
      font-weight: var(--fw-bold);
      line-height: var(--lh-bold-regular);
    }
    
    .input-bar__item-input {
      width: 100%;
      height: 24px;
      color: var(--color-primary);
      font-family: var(--ff-body);
      font-size: var(--fs-body-regular);
      font-weight: var(--fw-body);
      line-height: var(--lh-body-regular);
      background-color: transparent;
      border: none;
    }
    
    .input-bar__item-input::placeholder {
      color: var(--color-primary-alt);
    }
    
    .input-bar__item-input__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #input-bar-date {
      width: 120px;
    }

    .input-bar__item-input#date-input {
      position: relative;
    }

    .input-bar__item-input#date-input::-webkit-inner-spin-button {
      display: none;
    }

    .input-bar__item-input#date-input::-webkit-calendar-picker-indicator {
      width: 100%;
      height: 100%;
      position: absolute;
      background: transparent;
      cursor: pointer;
    }

    #input-bar-amount {
      width: 175px;
    }

    .plus-minus-container {
      width: 24px;
      height: 24px;
    }

    #is-expense-input,
    #is-expense-input:checked ~ img:nth-of-type(2),
    #is-expense-input:not(:checked) ~ img:nth-of-type(1) {
      display: none;
    }

    #is-expense-input:checked ~ img:nth-of-type(1),
    #is-expense-input:not(:checked) ~ img:nth-of-type(2) {
      display: block;
    }

    #is-expense-input ~ img {
      cursor: pointer;
    }

    .input-bar__item-input#amount-input {
      width: 78px;
      text-align: right;
    }

    .input-bar__item-input#amount-input::-webkit-inner-spin-button,
    .input-bar__item-input#amount-input::-webkit-outer-spin-button {
      display: none;
    }

    .input-bar__item-input#amount-input::after {
      content: "원";
      width: 20px;
      height: 20px;
      color: black;
    }

    #input-bar-content {
      width: 212px;
    }
    
    #input-bar-payment-method,
    #input-bar-category {
      width: 148px;
    }

    .input-bar > form > button {
      width: 40px;
      height: 40px;
      background-color: var(--color-primary-alt-40);
      border: none;
      border-radius: var(--radius-primary);
      cursor: not-allowed;
    }
    
    .input-bar > form > button:not(button:disabled) {
      background-color: var(--color-secondary-yellow);
      cursor: pointer;
    }
    
    .input-bar > form > button > img {
      width: 24px;
      height: 24px;
      filter: var(--filter-white);
    }
  </style>
`;

class InputBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const newEntryForm = this.shadowRoot.querySelector("form");
    const dropdownTags = [...newEntryForm.querySelectorAll("drop-down")];
    const dropdownInputs = dropdownTags.map((dropdownTag) => {
      return dropdownTag.shadowRoot.querySelector(".input-bar__item-input");
    });
    const allInputs = [
      ...newEntryForm.querySelectorAll(".input-bar__item-input"),
      ...dropdownInputs,
    ];
    const dateInput = newEntryForm.querySelector("#date-input");
    const isExpenseInput = newEntryForm.querySelector("#is-expense-input");
    const amountInput = newEntryForm.querySelector("#amount-input");
    const submitBtn = newEntryForm.querySelector(".entry-submit-btn");

    dateInput.valueAsDate = new Date();

    isExpenseInput.addEventListener("change", () => {
      const categoryDropdown = dropdownTags.find(
        (d) => d.getAttribute("name") === "category"
      );
      categoryDropdown.dataset.options = isExpenseInput.checked
        ? JSON.stringify(expenseCategories)
        : JSON.stringify(incomeCategories);
      categoryDropdown.shadowRoot.querySelector(
        ".input-bar__item-input"
      ).value = "";
    });

    amountInput.addEventListener("input", () => {
      amountInput.value = this.separateByThousands(amountInput.value);
    });

    newEntryForm.addEventListener("change", () =>
      this.enableOrDisableSubmitBtn(allInputs, submitBtn)
    );

    newEntryForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.submitNewEntry(allInputs, submitBtn);
    });
  }

  separateByThousands(val) {
    const parsedInput = val.replace(/,|[^0-9]/g, "");
    return parsedInput.replace(/(?<=\d)(?=(?:\d{3})+$)/g, ",");
  }

  enableOrDisableSubmitBtn(allInputs, submitBtn) {
    if ([...allInputs].every((x) => x.value)) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  submitNewEntry(allInputs, submitBtn) {
    console.log("submit new entry!");

    allInputs.forEach((input) => {
      if (input.name === "date") input.valueAsDate = new Date();
      else input.value = "";
    });
    submitBtn.disabled = true;
  }
}

customElements.define("input-bar", InputBar);
