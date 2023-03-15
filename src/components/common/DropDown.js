class DropDown extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = this.render();
  }

  connectedCallback() {
    this.render();

    //- Click to open
    const inputContainer = this.shadowRoot.querySelector(
      ".input-bar__item-input__container"
    );
    const optionsContainer = inputContainer.querySelector(
      "::slotted(.options-container)"
    );

    inputContainer.addEventListener("click", () => {
      console.log("click!!");
      optionsContainer.classList.add("is-active");
    });
  }

  disconnectedCallback() {}

  render() {
    // Move this out to state!!!!!!
    const dropdowns = {
      "payment-method": "결제방법",
      category: "분류",
    };

    const dropdownName = this.getAttribute("name");

    return `
        <div class="input-bar__item-name">${dropdowns[dropdownName]}</div>

        <div
          class="input-bar__item-input__container"
          id="${dropdownName}-dropdown">
          <input
            type="text"
            placeholder="선택하세요"
            class="input-bar__item-input"
            id="${dropdownName}-input"
            disabled
            required />

          <img
            src="src/assets/icons/chevron-down.svg"
            alt="Payment Method Dropdown" />
        </div>

        <slot name="options-container"></slot>

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
          color: var(--color-primary-alt);
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
          cursor: pointer;
        }
      </style>
    `;
  }
}

customElements.define("drop-down", DropDown);
