import { Element } from "../Element.js";
import { Carousel } from "./Carousel.js";
import { Logo } from "./Logo.js";
import { Tabs } from "./Tabs.js";

export class Header extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("HEADER");
    const logo = new Logo();
    const carousel = new Carousel("monthYear", "carousel", {
      "aria-roledescription": "캐러셀",
      "aria-label": "날짜",
    });
    const tabs = new Tabs("tabs");
    this.domNode.innerHTML = `
      <div class="inner">
        <!-- 로고 -->
        ${logo.view()}
        <!-- 캐러셀 -->
        ${carousel.view()}
        <!-- 탭 -->
        ${tabs.view()}
      </div>
    `;
  }
}
