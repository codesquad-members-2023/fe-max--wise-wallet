import { Element } from "../Element.js";
import { DELETE, OPEN } from "../SVG.js";

function MenuItemRadioView([payment, check]) {
  return `
    <li role="menuitemradio" tabindex="-1" aria-checked="${check}">
      <span>${payment}</span>
      <button class="delete" aria-hidden="true">
        ${DELETE}
      </button>
    </li>
  `;
}

export class PaymentGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "menu-popup group group-payment";
    const payments = [
      ["현금", true],
      ["신용카드", false],
    ];
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `  
        <label for="payment" aria-hidden="true">결제수단</label>
        <div class="field">
          <button
            id="payment"
            type="button"
            aria-haspopup="true"
            aria-controls="menu1"
            class="item menu-button"
            tabindex="-1"
            aria-label="입력하세요">
            <span class="placeholder"> 입력하세요 </span>
          </button>
          <label for="payment">
            ${OPEN}
          </label>
        </div>
        <ul role="menu" id="menu1" aria-label="결제수단">
          ${payments.map(MenuItemRadioView).join("")}
          <li role="menuitemradio" tabindex="-1" aria-checked="false">
            <button class="add">
              추가하기
            </button>
          </li>
        </ul>
      `
    );
  }
}
