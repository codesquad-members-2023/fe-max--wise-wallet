import { Element } from "../Element.js";

export class Logo extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("h1");
    this.domNode.id = "logo";
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <a
          class="display display--small"
          href="#"
          aria-label="지혜로운 지갑">
          <span>Wise</span>
          <span>wallet</span>
        </a>
      `
    );
  }
}
