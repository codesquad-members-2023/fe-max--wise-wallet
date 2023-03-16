import { $classNode } from "./dom.js";
import { System } from "./System.js";

export class Element {
  constructor() {
    this.domNode = null;
    this.system = new System();
    this.init();
    $classNode(this.constructor.name).push(this.domNode);
  }

  init() {
    this.domNode = document.createElement("DIV");
  }

  view() {
    return this.domNode.outerHTML;
  }
}
