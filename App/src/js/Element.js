export class Element {
  constructor() {
    this.domNode = null;
    this.init();
  }

  init() {
    this.domNode = document.createElement("DIV");
  }

  view() {
    return this.domNode.outerHTML;
  }
}
