import { Element } from "../Element.js";
import { expenditureCategories, incomeCategories } from "../System.js";
import { arrToMenuItemData } from "../utils.js";
import { OPEN } from "../SVG.js";

function MenuItemRadioView([category, check]) {
  return `
    <li role="menuitemradio" tabindex="-1" aria-checked="${check}">
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
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
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
        ${arrToMenuItemData(expenditureCategories)
          .map(MenuItemRadioView)
          .join("")}
        </ul>
      `
    );
  }

  injectionCategories(isIncome) {
    const menu = this.domNode.querySelector('[role="menu"]');

    if (isIncome) {
      menu.innerHTML = arrToMenuItemData(incomeCategories)
        .map(MenuItemRadioView)
        .join("");
      return;
    }
    menu.innerHTML = arrToMenuItemData(expenditureCategories)
      .map(MenuItemRadioView)
      .join("");
  }
}
