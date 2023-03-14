import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";

export class App {
  constructor(domNode) {
    this.domNode = domNode;
  }

  render() {
    const header = new Header();
    const headerHTML = header.view();

    const main = new Main();
    const mainHTML = main.view();

    this.domNode.innerHTML = `
      ${headerHTML}
      ${mainHTML}
    `;
  }
}
