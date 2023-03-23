import { Element } from "../Element.js";
import { MINUS, PLUS } from "../SVG.js";

export class AmountGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group";

    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <label for="amount" aria-hidden="true">금액</label>
        <div class="field field-amount">
          <button id="sign" tabindex="-1" class="minus">
            <figure>
              ${PLUS}
              <figcaption class="blind">수입</figcaption>
            </figure>
            <figure>
              ${MINUS}
              <figcaption class="blind">지출</figcaption>
            </figure>
          </button>
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
              step="10"
              placeholder="0" />
          </div>
          <span>원</span>
        </div>
      `
    );
  }
}
