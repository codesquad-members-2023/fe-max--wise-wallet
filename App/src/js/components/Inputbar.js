import { $classElement } from "../dom.js";
import { Element } from "../Element.js";
import { AmountGroup } from "./AmountGroup.js";
import { DateGroup } from "./DateGroup.js";
import { DetailGroup } from "./DetailGroup.js";
import { DivisionGroup } from "./DivisionGroup.js";
import { PaymentGroup } from "./PaymentGroup.js";
import { SubmitGroup } from "./SubmitGroup.js";

export class Inputbar extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "format";
    const attr = {
      role: "toolbar",
      "aria-label": "입력공간",
      "aria-controls": "history",
    };
    Object.entries(attr).forEach(([name, value]) => {
      this.domNode.setAttribute(name, value);
    });

    const dateGroup = new DateGroup();
    const amountGroup = new AmountGroup();
    const detailGroup = new DetailGroup();
    const paymentGroup = new PaymentGroup();
    const divisionGroup = new DivisionGroup();
    const submitGroup = new SubmitGroup();

    const $dateGroup = dateGroup.domNode;
    const $amountGroup = amountGroup.domNode;
    const $detailGroup = detailGroup.domNode;
    const $paymentGroup = paymentGroup.domNode;
    const $divisionGroup = divisionGroup.domNode;
    const $submitGroup = submitGroup.domNode;

    this.domNode.appendChild($dateGroup);
    this.domNode.appendChild($amountGroup);
    this.domNode.appendChild($detailGroup);
    this.domNode.appendChild($paymentGroup);
    this.domNode.appendChild($divisionGroup);
    this.domNode.appendChild($submitGroup);

    const signButton = $amountGroup.querySelector("button");

    signButton.addEventListener("click", this.signButtonHandler.bind(this));
    signButton.addEventListener("keydown", this.signButtonHandler.bind(this));

    const amountInput = $amountGroup.querySelector("input");

    amountInput.addEventListener("input", this.amountInputHandler.bind(this));

    const menuPopUps = this.domNode.querySelectorAll(".menu-popup");
    menuPopUps.forEach((menuPopUp) => {
      menuPopUp.addEventListener(
        "click",
        this.menuPopUpHandler.bind({ system: this.system, menuPopUp })
      );
      menuPopUp.addEventListener(
        "keydown",
        this.menuPopUpHandler.bind({ system: this.system, menuPopUp })
      );
    });

    const fields = [
      $dateGroup,
      signButton,
      $amountGroup,
      $detailGroup,
      $paymentGroup,
      $divisionGroup,
      $submitGroup,
    ];

    const inputs = fields.map((field) => {
      if (field === signButton) return signButton;
      let target = field.querySelector("input");
      if (!target) target = field.querySelector("button");
      return target;
    });

    inputs.forEach((input, i) => {
      input.addEventListener("keydown", (e) => {
        const { key } = e;
        let nextIndex = null;
        switch (key) {
          case "ArrowLeft":
            inputs[i].setAttribute("tabindex", "-1");
            nextIndex = (inputs.length + i - 1) % inputs.length;
            inputs[nextIndex].setAttribute("tabindex", "0");
            inputs[nextIndex].focus();
            return;
          case "ArrowRight":
            inputs[i].setAttribute("tabindex", "-1");
            nextIndex = (i + 1) % inputs.length;
            inputs[nextIndex].setAttribute("tabindex", "0");
            inputs[nextIndex].focus();
            return;
          case "Tab":
            const history = document.querySelector("#history");
            history.focus();
        }
      });
    });

    const detailInput = $detailGroup.querySelector("input");
    detailInput.addEventListener("focusin", () => {
      detailInput.value = "";
      this.system.setInputDataValue("detail", null);
    });
    detailInput.addEventListener(
      "input",
      this.detailInputHandler.bind({ system: this.system })
    );

    const submitButton = $submitGroup.querySelector("button");
    submitButton.addEventListener("click", this.submitButtonHandler.bind(this));
    submitButton.addEventListener(
      "keydown",
      this.submitButtonHandler.bind(this)
    );
  }
}

Inputbar.prototype.signButtonHandler = function (e) {
  e.preventDefault();
  const { type, code } = e;
  const $paymentGroup = this.domNode.querySelector(".group-payment");
  const signButton = this.domNode.querySelector("#sign");
  const divisionGroup = $classElement("DivisionGroup");
  const divisionButton = divisionGroup.domNode.querySelector("#division");
  divisionButton.innerHTML = `<span class="placeholder">입력하세요</span>`;
  this.system.setInputDataValue("division", null);

  if (type === "keydown") {
    if (code !== "Enter" && code !== "Space") {
      return;
    }
  }
  if (signButton.className === "plus") {
    signButton.className = "minus";
    $paymentGroup.className = "menu-popup group group-payment";
    divisionGroup.injectionCategories();
    this.system.setInputDataValue("sign", "minus");

    const button = $paymentGroup.querySelector("button");
    const paymentText = button.textContent.trim();
    this.system.setInputDataValue("payment", paymentText);
    if (paymentText === "입력하세요") {
      this.system.setInputDataValue("payment", null);
    }
    return;
  }
  signButton.className = "plus";
  $paymentGroup.className = "menu-popup group group-payment is-hidden";
  divisionGroup.injectionCategories(true);
  this.system.setInputDataValue("sign", "plus");
  this.system.setInputDataValue("payment", "is-expenditure");
};

Inputbar.prototype.amountInputHandler = function (e) {
  const $amountField = this.domNode.querySelector(".field-amount");
  const amountCoverSpan = $amountField.querySelector(".cover span");
  const amountInput = $amountField.querySelector("#amount");
  let { value } = amountInput;
  if (value > 99999990) {
    value = 99999990;
    amountInput.value = 99999990;
  }
  this.system.setInputDataValue("amount", parseInt(value));
  if (value != "") {
    amountCoverSpan.className = "";
    amountCoverSpan.textContent = parseInt(value).toLocaleString();
    return;
  }
  amountCoverSpan.className = "alt";
  amountCoverSpan.textContent = 0;
};

Inputbar.prototype.menuPopUpHandler = function (e) {
  e.preventDefault();
  const { type, key } = e;
  if (type === "keydown") {
    if (key === "tab") {
      const history = document.querySelector("#history");
      history.focus();
      return;
    }
    if (key !== "Enter" && key !== "Space") {
      return;
    }
  }
  const { system, menuPopUp } = this;
  const button = menuPopUp.querySelector("button");

  const menu = menuPopUp.querySelector('[role="menu"]');

  menu.className = "active";
  const checkedItem = menu.querySelector(
    '[role="menuitemradio"][aria-checked="true"]'
  );

  checkedItem.focus();

  let flag = false;

  const items = [];
  menu.querySelectorAll('[role="menuitemradio"]').forEach((item) => {
    items.push(item);
  });

  function menufocusOutHandler() {
    if (flag) return;
    menu.removeEventListener("focusout", menufocusOutHandler);
    items.forEach((item) => {
      item.removeEventListener("keydown", itemKeyDownHandler);
      item.removeEventListener("mousedown", itemMouseDownHandler);
    });
    setTimeout(() => {
      menu.className = "";
    }, 10);
    button.focus();
  }

  function itemKeyDownHandler({ key, target }) {
    const index = items.indexOf(target);

    switch (key) {
      case "ArrowUp": {
        let nextIndex = null;
        items[index].setAttribute("aria-checked", "false");
        nextIndex = (items.length + index - 1) % items.length;
        items[nextIndex].setAttribute("aria-checked", "true");
        flag = true;
        items[nextIndex].focus();
        flag = false;
        return;
      }
      case "ArrowDown": {
        let nextIndex = null;
        items[index].setAttribute("aria-checked", "false");
        nextIndex = (index + 1) % items.length;
        items[nextIndex].setAttribute("aria-checked", "true");
        flag = true;
        items[nextIndex].focus();
        flag = false;
        return;
      }
      case "Enter":
      case "Space": {
        button.textContent = items[index].textContent.trim();
        system.setInputDataValue(button.id, button.textContent);
        menufocusOutHandler();
      }
    }
  }

  function itemMouseDownHandler(e) {
    button.textContent = e.target.textContent.trim();
    system.setInputDataValue(button.id, button.textContent);
    menufocusOutHandler();
  }

  items.forEach((item, i) => {
    item.addEventListener("keydown", itemKeyDownHandler);
    item.addEventListener("mousedown", itemMouseDownHandler);
  });

  menu.addEventListener("focusout", menufocusOutHandler);
};

Inputbar.prototype.detailInputHandler = function (e) {
  const { system } = this;
  system.setInputDataValue("detail", e.target.value);
};

Inputbar.prototype.submitButtonHandler = function (e) {
  const submitButton = this.domNode.querySelector("#submit");
  if (submitButton.className !== "item submit active") {
    return;
  }

  const { move, index } = submitButton.dataset;

  switch (move) {
    case "POST":
      this.system.post();
      break;
    case "PUT": {
      this.system.put(index);
      break;
    }
  }
  this.clear();
};

Inputbar.prototype.clear = function () {
  const sign = this.domNode.querySelector("#sign");
  sign.className = "minus";

  const coverSpan = this.domNode.querySelector(".field-amount .cover span");
  coverSpan.className = "alt";
  coverSpan.textContent = "0";

  const amountInput = this.domNode.querySelector("#amount");
  amountInput.value = "";

  const detail = this.domNode.querySelector("#detail");
  detail.value = "";

  const paymentButton = this.domNode.querySelector("#payment");
  paymentButton.innerHTML = `<span class="placeholder">입력하세요</span>`;

  const $paymentGroup = this.domNode.querySelector(".group-payment");
  $paymentGroup.className = "menu-popup group group-payment";

  const divisionButton = this.domNode.querySelector("#division");
  divisionButton.innerHTML = `<span class="placeholder">입력하세요</span>`;

  const submitButton = this.domNode.querySelector("#submit");
  submitButton.setAttribute("data-move", "POST");
  if (submitButton.hasAttribute("data-index")) {
    submitButton.removeAttribute("data-index");
  }
  this.system.resetInputDataValue();
};

Inputbar.prototype.setData = function (data, index) {
  this.clear();
  const [dateInput, amountInput, detailInput] =
    this.domNode.querySelectorAll("input[id]");
  const [signButton, paymentButton, divisionButton, submitButton] =
    this.domNode.querySelectorAll("button[id]");
  const fields = [
    dateInput,
    signButton,
    amountInput,
    detailInput,
    paymentButton,
    divisionButton,
  ];
  const inputbar = this;
  fields.forEach((field, i) => {
    this.system.setInputDataValue(field.id, data[i]);
    if (field.id === "sign") {
      return;
    }
    switch (field.tagName) {
      case "INPUT":
        field.value = data[i];
        return;
      case "BUTTON":
        field.textContent = data[i];
    }
  });
  if (data[1] === "plus") {
    signButton.className = "plus";
    const $paymentGroup = inputbar.domNode.querySelector(".group-payment");
    $paymentGroup.className = "menu-popup group group-payment is-hidden";
    paymentButton.innerHTML = `<span class="placeholder">입력하세요</span>`;
    console.log($classElement("DivisionGroup").injectionCategories);
    $classElement("DivisionGroup").injectionCategories(true);
  } else {
    signButton.className = "minus";
    $classElement("DivisionGroup").injectionCategories();
  }
  const coverSpan = this.domNode.querySelector(".field-amount .cover span");
  coverSpan.className = "";
  coverSpan.textContent = parseInt(amountInput.value).toLocaleString();

  submitButton.setAttribute("data-move", "PUT");
  submitButton.setAttribute("data-index", index);
};
