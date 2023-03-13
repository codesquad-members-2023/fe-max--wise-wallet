import { Header } from "./components/Header.js";

export class App {
  constructor(domNode) {
    this.domNode = domNode;
  }

  render() {
    const header = new Header();
    const headerHTML = header.view();
    this.domNode.innerHTML = `
      ${headerHTML}
    `;
  }
}
