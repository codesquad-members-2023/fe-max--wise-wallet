const template = document.createElement("template");
template.innerHTML = `
  <h1>Chart Page!</h1>
`;

class ChartPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("chart-page", ChartPage);
