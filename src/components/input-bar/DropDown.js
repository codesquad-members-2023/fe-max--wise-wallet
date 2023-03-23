const template = document.createElement("template");
template.innerHTML = `
  <div class="input-bar__item-name"></div>

  <div class="input-bar__item-input__container">
    <input
      type="text"
      placeholder="선택하세요"
      class="input-bar__item-input"
      disabled
      required />

    <img
      src="src/assets/icons/chevron-down.svg"
      alt="Payment Method Dropdown" />
  </div>

  <ul class="options-container"></ul>

  <style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .input-bar__item-name {
      height: 16px;
      color: var(--color-primary-alt);
      font-size: var(--fs-bold-regular);
      font-weight: var(--fw-bold);
      line-height: var(--lh-bold-regular);
    }
    
    .input-bar__item-input__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
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
      cursor: pointer;
    }

    .input-bar__item-input::placeholder {
      color: var(--color-primary-alt);
    }

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

    .option {
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--color-primary);
      cursor: pointer;
    }

    .option:last-of-type {
      border-bottom: none;
    }

    .option-name {
      width: 100%;
      height: 100%;
      padding: 16px 0;
    }

    .option-delete-btn {
      width: 16px;
      height: 16px;
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .option-delete-btn > img {
      width: 100%;
      height: 100%;
      filter: var(--filter-secondary-red);
    }
  </style>
`;

class DropDown extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.dropdownTypes = {
      "payment-method": "결제방법",
      "category": "분류",
    };
  }

  connectedCallback() {
    const dropdownType = this.getAttribute("name");
    const dropdownList = JSON.parse(this.dataset.options);

    const dropdownName = this.shadowRoot.querySelector(".input-bar__item-name");
    const inputContainer = this.shadowRoot.querySelector(
      ".input-bar__item-input__container"
    );
    const inputDisplay = inputContainer.querySelector(".input-bar__item-input");
    const optionsContainer =
      this.shadowRoot.querySelector(".options-container");

    this.initDropdownOptions(
      dropdownName,
      dropdownType,
      inputContainer,
      inputDisplay,
      optionsContainer,
      dropdownList
    );

    inputContainer.addEventListener("click", (evt) => {
      this.closeOtherDropdowns(evt);
      optionsContainer.classList.toggle("is-active");
    });

    optionsContainer.addEventListener("click", (evt) => {
      const el = evt.target;
      const targetOption = el.closest(".option");
      const optionName = targetOption?.dataset?.value;

      if (dropdownType === "payment-method") {
        const newPaymentMethodModal = document.querySelector(
          "#new-payment-method-modal"
        );
        const deletePaymentMethodModal = document.querySelector(
          "#delete-payment-method-modal"
        );

        if (el.tagName === "IMG" || el.tagName === "BUTTON") {
          this.openModal(deletePaymentMethodModal, optionName);
        } else if (el.tagName === "SPAN") {
          if (optionName === "추가하기") {
            this.openModal(newPaymentMethodModal);
          } else {
            this.selectOption(inputDisplay, optionName, optionsContainer);
          }
        }
      } else if (dropdownType === "category") {
        if (el.tagName === "SPAN") {
          this.selectOption(inputDisplay, optionName, optionsContainer);
        }
      }
    });
  }

  initDropdownOptions(
    dropdownName,
    dropdownType,
    inputContainer,
    inputDisplay,
    optionsContainer,
    dropdownList
  ) {
    dropdownName.innerText = this.dropdownTypes[dropdownType];
    inputContainer.id = `${dropdownType}-dropdown`;
    inputDisplay.id = `${dropdownType}-input`;
    optionsContainer.innerHTML = this.renderOptions(dropdownType, dropdownList);
  }

  renderOptions(dropdownType, dropdownList) {
    return `
      ${dropdownList.reduce((acc, curr) => {
        return (
          acc +
          `
            <li class="option" data-value="${curr}">
              <span class="option-name">${curr}</span>
              ${
                dropdownType === "payment-method"
                  ? "<button type='button' class='option-delete-btn'><img src='src/assets/icons/close.svg' alt='Remove Payment Method' /></button>"
                  : ""
              }
            </li>
          `
        );
      }, "")}

      ${
        dropdownType === "payment-method"
          ? `
            <li
              class="option"
              id="add-payment-method-option"
              data-value="추가하기">
              <span class="option-name">추가하기</span>
            </li>
          `
          : ""
      }
    `;
  }

  closeOtherDropdowns(evt) {
    const allDropdowns =
      this.shadowRoot.host.parentElement.querySelectorAll("drop-down");
    allDropdowns.forEach((dropdown) => {
      const inputContainer = dropdown.shadowRoot.querySelector(
        ".input-bar__item-input__container"
      );
      const correspondingOptionsContainer =
        dropdown.shadowRoot.querySelector(".options-container");

      if (!inputContainer.contains(evt.target)) {
        correspondingOptionsContainer.classList.remove("is-active");
      }
    });
  }

  selectOption(inputDisplay, optionName, optionsContainer) {
    inputDisplay.value = optionName;
    optionsContainer.classList.remove("is-active");
    this.parentElement.dispatchEvent(new Event("change", { bubbles: true }));
  }

  openModal(modal, content) {
    modal.classList.add("is-active");
    if (content) modal.dataset.content = content;
  }

  static get observedAttributes() {
    return ["data-options"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-options") {
      this.displayNewCategory(newVal);
    }
  }

  displayNewCategory(newVal) {
    const dropdownType = this.getAttribute("name");
    const optionsContainer =
      this.shadowRoot.querySelector(".options-container");
    optionsContainer.innerHTML = this.renderOptions(
      dropdownType,
      JSON.parse(newVal)
    );
  }
}

customElements.define("drop-down", DropDown);
