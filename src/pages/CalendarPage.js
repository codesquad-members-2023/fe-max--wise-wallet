const template = document.createElement("template");
template.innerHTML = `
  <h1>Calendar Page!</h1>
`;

class CalendarPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("calendar-page", CalendarPage);
