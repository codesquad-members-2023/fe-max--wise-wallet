import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { $classNode, $clearClassNode } from "./dom.js";

export class App {
  constructor(domNode) {
    this.domNode = domNode;
    $classNode(this.constructor.name).push(this.domNode);
  }

  render() {
    $clearClassNode();
    const header = new Header();
    const headerHTML = header.view();

    const main = new Main();
    const mainHTML = main.view();
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        ${headerHTML}
        ${mainHTML}
      `
    );
    console.log($classNode());
  }
}
