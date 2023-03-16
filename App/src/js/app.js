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
    const main = new Main();
    
    this.domNode.appendChild(header.domNode);
    this.domNode.appendChild(main.domNode);
  }
}
