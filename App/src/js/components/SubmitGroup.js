import { Element } from "../Element.js";

const CHECK_ICON_SVG = `
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M21 6L8.625 18L3 12.5455"
    stroke="#FCFCFC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round" />
  </svg>
`;

export class SubmitGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group group-submit";
    this.domNode.innerHTML = `
      <button
        class="item submit active"
        tabindex="-1"
        aria-label="등록하기">
        <figure>
          ${CHECK_ICON_SVG}
          <figcaption class="blind">등록하기</figcaption>
        </figure>
      </button>
    `;
  }
}
