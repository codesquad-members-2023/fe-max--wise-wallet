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

    const inner = document.createElement("DIV");
    inner.className = "inner";
    inner.appendChild(logo.domNode);
    inner.appendChild(carousel.domNode);
    inner.appendChild(tabs.domNode);

    this.domNode.appendChild(inner);
  }
}
