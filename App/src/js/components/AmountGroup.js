import { Element } from "../Element.js";

export class AmountGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group";
    this.domNode.innerHTML = `
      <label for="amount" aria-hidden="true">금액</label>
      <div class="field field-amount">
        <figure>
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1H13"
              stroke="#524D90"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <figcaption class="blind">지출</figcaption>
        </figure>
        <div class="fieldset">
          <div class="cover">
            <span class="alt">0</span>
          </div>
          <input
            id="amount"
            class="item"
            type="number"
            tabindex="-1"
            min="0"
            max="9999999"
            step="10"
            placeholder="0" />
        </div>
        <span>원</span>
      </div>
    `;
  }
}
