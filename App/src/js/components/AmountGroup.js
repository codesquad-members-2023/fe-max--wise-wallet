import { Element } from "../Element.js";
import { MINUS } from "./SVG.js";

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
          ${MINUS}
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
