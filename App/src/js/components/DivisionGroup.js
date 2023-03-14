import { Element } from "../Element.js";
import { OPEN } from "./SVG.js";

function MenuItemRadioView([category, check]) {
  return `
    <li role="menuitemradio" aria-checked="${check}">
      <span>${category}</span>
    </li>
  `;
}

export class DivisionGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "menu-popup group";
    const categories = [
      ["생활", true],
      ["식비", false],
      ["교통", false],
      ["쇼핑/뷰티", false],
      ["의료/건강", false],
      ["문화/여가", false],
      ["미분류", false],
    ];
    this.domNode.innerHTML = `
    <label for="menu2" aria-hidden="true">분류</label>
    <div class="field">
      <button
        id="division"
        type="button"
        aria-haspopup="true"
        aria-controls="menu2"
        class="item menu-button"
        tabindex="-1"
        aria-label="입력하세요">
        <span class="placeholder"> 입력하세요 </span>
      </button>
      <label for="division">
        ${OPEN}
      </label>
    </div>
    <ul role="menu" id="menu2" aria-label="분류">
      ${categories.map(MenuItemRadioView).join("")}
    </ul>
    `;
  }
}
