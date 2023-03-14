import { Element } from "../Element.js";

export class PaymentGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "menu-popup group";
    this.domNode.innerHTML = `  
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6L8 10L12 6"
              stroke="#A79FCB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </label>
      </div>
      <ul role="menu" id="menu1" aria-label="결제수단">
        <li role="menuitemradio" aria-checked="true">
          <span>현금</span>
          <button tabindex="-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4L4 12"
                stroke="#E75B3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M4 4L12 12"
                stroke="#E75B3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </li>
        <li role="menuitemradio" aria-checked="false">
          <span>신용카드</span>
          <button tabindex="-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4L4 12"
                stroke="#E75B3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M4 4L12 12"
                stroke="#E75B3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </li>
        <li role="menuitemradio" aria-checked="false">
          <span>추가하기</span>
        </li>
      </ul>
    `;
  }
}
