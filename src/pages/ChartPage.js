class ChartPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = `
      <top-header></top-header>
      <h1>Chart Page!</h1>
    `;
  }
}

customElements.define("chart-page", ChartPage);
