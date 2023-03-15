import { Element } from "../Element.js";
import { SUBMIT } from "./SVG.js";

export class SubmitGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group group-submit";
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <button
          class="item submit active"
          tabindex="-1"
          aria-label="등록하기">
          <figure>
            ${SUBMIT}
            <figcaption class="blind">등록하기</figcaption>
          </figure>
        </button>
      `
    )
  }
}
