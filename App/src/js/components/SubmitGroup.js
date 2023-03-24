import { Element } from "../Element.js";
import { ACTIVE_SUBMIT, UNACTIVE_SUBMIT } from "../SVG.js";

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
          id="submit"
          class="item submit"
          tabindex="-1"
          aria-label="등록하기"
          data-move="POST">
          <figure>
            ${UNACTIVE_SUBMIT}
            <figcaption class="blind">정보가 전부 입력되지 않았습니다.</figcaption>
          </figure>
          <figure>
            ${ACTIVE_SUBMIT}
            <figcaption class="blind">등록하기</figcaption>
          </figure>
        </button>
      `
    );
  }
}
