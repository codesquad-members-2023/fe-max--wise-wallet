import { Element } from "../Element.js";

export class DivisionGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "menu-popup group";
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
    <ul role="menu" id="menu2" aria-label="분류">
      <li role="menuitemradio" aria-checked="true">
        <span>생활</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>식비</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>교통</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>쇼핑/뷰티</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>의료/건강</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>문화/여가</span>
      </li>
      <li role="menuitemradio" aria-checked="false">
        <span>미분류</span>
      </li>
    </ul>
    `;
  }
}
