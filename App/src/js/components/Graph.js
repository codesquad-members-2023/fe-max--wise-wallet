import { Element } from "../Element.js";

export class Graph extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("ARTICLE");
    this.domNode.id = "graph";
    
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <h3>생활 카테고리 소비 추이</h3>
        <figure></figure>
      `
    )
  }
}
