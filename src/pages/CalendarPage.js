class CalendarPage extends HTMLElement {
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
      <h1>Calendar Page!</h1>
    `;
  }
}

customElements.define("calendar-page", CalendarPage);
