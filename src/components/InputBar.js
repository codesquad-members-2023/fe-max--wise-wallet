class InputBar extends HTMLElement {
  constructor() {
    super();
    this.state = {
      isExpense: true, // need to create state mechanism (observer pattern)!
    };
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = this.render();
  }

  connectedCallback() {
    const newEntryForm = this.shadowRoot.querySelector("form");
    const allInputs = newEntryForm.querySelectorAll(".input-bar__item-input");
    const dateInput = newEntryForm.querySelector("#date-input");
    const isExpenseInput = newEntryForm.querySelector("#is-expense-input");
    const amountInput = newEntryForm.querySelector("#amount-input");
    const submitBtn = newEntryForm.querySelector(".entry-submit-btn");

    //- Initialize Date Input to Today
    dateInput.valueAsDate = new Date();

    //- Switch Between Expense/Income
    isExpenseInput.addEventListener("click", () => {
      this.state.isExpense = isExpenseInput.checked;
      console.log(this.state.isExpense);
    });

    //- Thousands Delimiter
    amountInput.addEventListener("input", () => {
      const parsedInput = amountInput.value.replace(/,|[^0-9]/g, "");
      amountInput.value = parsedInput.replace(/(?<=\d)(?=(?:\d{3})+$)/g, ",");
    });

    //- Check if all inputs are filled in.
    newEntryForm.addEventListener("change", () => {
      if ([...allInputs].every((x) => x.value && x.value !== "선택하세요")) {
        console.log("ready to submit!");
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });

    //- Submit New Entry
    newEntryForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("submitted new entry!");
      // submit new entry to state!!!!!!!!!!

      //- Reset values
      allInputs.forEach((input) => {
        if (input.name === "date") input.valueAsDate = new Date();
        else input.value = "";
      });
      submitBtn.disabled = true;
    });
  }

  disconnectedCallback() {}

  render() {
    // Move these out to state!!!!!!
    const paymentMethods = ["현금", "신용카드"];
    const expenseCategories = [
      "생활",
      "식비",
      "교통",
      "쇼핑/뷰티",
      "의료/건강",
      "문화/여가",
      "미분류",
    ];
    const incomeCategories = ["월급", "용돈", "기타수입"];

    const { isExpense } = this.state;

    return `
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
            class="input-bar__item" id="input-bar-payment-method" for="payment-method" name="payment-method">
            <ul class="options-container" slot="options-container">
              ${paymentMethods.reduce((acc, curr) => {
                return (
                  acc +
                  `
                  <li class="option" data-value="${curr}">
                    <span>${curr}</span>
                    <button type="button" class="option-delete-btn">
                      <img 
                        src="src/assets/icons/close.svg"
                        alt="Remove Payment Method" />
                    </button>
                  </li>
                `
                );
              }, "")}

              <li
                class="option"
                id="add-payment-method-option"
                data-value="추가하기">
                <span>추가하기</span>
              </li>
            </ul>
          </drop-down>

          <drop-down 
            class="input-bar__item" id="input-bar-category" for="category" name="category">
            <ul class="options-container" slot="options-container">
              ${(isExpense ? expenseCategories : incomeCategories).reduce(
                (acc, curr) => {
                  return (
                    acc +
                    `
                  <li class="option" data-value="${curr}">
                    <span>${curr}</span>
                  </li>
                `
                  );
                },
                ""
              )}
            </ul>
          </drop-down>

          <button type="submit" class="entry-submit-btn" disabled>
            <img src="src/assets/icons/check.svg" alt="Submit" />
          </button>
        </form>
      </section>

      ${this.styles()}
    `;
  }

  styles() {
    return `
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

        /* date input */
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

        /* amount input */
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

        /* content input */
        #input-bar-content {
          width: 212px;
        }
        
        /* payment-method and category*/
        #input-bar-payment-method,
        #input-bar-category {
          width: 148px;
        }

        /* select dropdown */
        .options-container {
          width: 148px;
          padding: 0 24px;
          display: none;
          position: absolute;
          top: 65px;
          left: 0;
          background-color: var(--color-white);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius-primary);
          box-shadow: var(--shadow);
          list-style: none;
        }

        .options-container.is-active {
          display: block;
        }

        .options-container .option {
          width: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-primary);
          cursor: pointer;
        }

        .options-container .option:last-of-type {
          border-bottom: none;
        }

        .options-container .option span {
          width: 100%;
          height: 100%;
          padding: 16px 0;
        }

        .options-container .option img {
          filter: var(--filter-secondary-red);
        }

        .options-container .option-delete-btn {
          width: 16px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .options-container .option-delete-btn > img {
          width: 100%;
          height: 100%;
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
  }
}

customElements.define("input-bar", InputBar);
