const template = document.createElement("template");
template.innerHTML = `
    <form action="#">
      <div class="modal-content">
        <h3 class="modal-title"></h3>
        <input
          type="text"
          placeholder="입력하세요"
          class="modal-body"
          name="new-payment-method"
          required />
      </div>
      <div class="modal-btns">
        <button type="button" class="cancel-btn">취소</button>
        <button type="submit" class="proceed-btn">등록</button>
      </div>
    </form>

  <style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      height: 100%;
      display: none;
      position: fixed;
      background-color: var(--color-black-40);
      z-index: 1;
    }
    
    :host(.is-active) {
      display: block;
    }

    form {
      width: 400px;
      height: 228px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-white);
      border: 1px solid var(--color-primary);
      border-radius: var(--radius-primary);
      box-shadow: var(--shadow);
    }

    .modal-content {
      margin-bottom: 32px;
    }

    .modal-title {
      height: 24px;
      margin-bottom: 24px;
      font-size: var(--fs-body-regular);
      font-weight: var(--fw-body);
      font-style: normal;
      line-height: var(--lh-body-regular);
    }

    .modal-body {
      width: 100%;
      height: 44px;
      padding: 10px;
      background-color: var(--color-white);
      border: 1px solid var(--color-primary);
      border-radius: var(--radius-primary);
      color: var(--color-primary);
    }

    .modal-body::placeholder {
      color: var(--color-primary-alt);
      font-family: var(--ff-body);
      font-size: var(--fs-body-regular);
      font-weight: var(--fw-body);
      font-style: normal;
      line-height: var(--lh-body-regular);
    }

    .delete-payment-method .modal-body {
      background-color: var(--color-primary-alt-40);
      border: none;
    }

    .modal-btns {
      height: 24px;
      display: flex;
      justify-content: space-between;
    }

    .modal-btns > button {
      width: 28px;
      background-color: transparent;
      border: none;
      font-family: var(--ff-bold);
      font-size: var(--fs-bold-large);
      font-weight: var(--fw-bold);
      font-style: normal;
      line-height: var(--lh-bold-medium);
      cursor: pointer;
    }

    .modal-btns .cancel-btn {
      width: 28px;
      height: 24px;
      color: var(--color-primary);
    }

    .new-payment-method .proceed-btn {
      color: var(--color-secondary-yellow);
    }

    .delete-payment-method .proceed-btn {
      color: var(--color-secondary-red);
    }
  </style>
`;

class AlertModal extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const modalName = this.getAttribute("name");
    const modalForm = this.shadowRoot.querySelector("form");
    const modalTitle = modalForm.querySelector(".modal-title");
    const cancelBtn = modalForm.querySelector(".cancel-btn");
    const proceedBtn = modalForm.querySelector(".proceed-btn");

    this.initAlertModal(modalForm, modalName, modalTitle, proceedBtn);

    cancelBtn.addEventListener("click", () => {
      this.closeModal();
    });

    modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (modalName === "new-payment-method") {
        const newPaymentMethod = modalForm["new-payment-method"].value.trim();

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

        // Select and add to payment methods options container.
        // paymentMethodOptionsContainer.insertBefore(
        //   newLi,
        //   addPaymentMethodOption
        // );
        console.log("added new payment method");
      } else if (modalName === "delete-payment-method") {
        // Delete the specified payment method
        console.log("deleted payment method");
      }

      this.closeModal();
    });

    this.addEventListener("click", this.handleClick);
  }

  initAlertModal(modalForm, modalName, modalTitle, proceedBtn) {
    modalForm.classList.add(modalName);
    modalTitle.innerText = this.dataset.title;
    proceedBtn.innerText = modalName === "new-payment-method" ? "등록" : "삭제";
  }

  handleClick(evt) {
    const path = evt.composedPath();
    const form = path.find((node) => node.tagName === "FORM");
    if (!form) this.closeModal();
  }

  closeModal() {
    this.classList.remove("is-active");
  }

  static get observedAttributes() {
    return ["data-content"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-content") {
      const modalBody = this.shadowRoot.querySelector(".modal-body");
      modalBody.value = newVal;
    }
  }
}

customElements.define("alert-modal", AlertModal);
