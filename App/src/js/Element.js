import { $classElement } from "./dom.js";
import { System } from "./System.js";

export class Element {
  constructor() {
    this.domNode = null;
    this.system = new System();
    this.init();
    $classElement(this.constructor.name, true).push(this);
  }

  init() {
    this.domNode = document.createElement("DIV");
  }

  view() {
    return this.domNode.outerHTML;
  }
}
