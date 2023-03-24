import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { $clearclassElement } from "./dom.js";
import { System } from "./System.js";

export class App {
  constructor(domNode) {
    this.domNode = domNode;
    const system = new System();
    system.init();
  }

  render() {
    $clearclassElement();
    const header = new Header();
    const main = new Main();

    this.domNode.appendChild(header.domNode);
    this.domNode.appendChild(main.domNode);
  }
}
