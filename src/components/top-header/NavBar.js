class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const currView = window.location.pathname.replace("index.html", "");

    this.innerHTML = `
      <nav class="view-nav">
        <ul>
          <li class="view-nav__tab">
            <a href="#" data-path="/">
              <img class="${
                currView === "/" && "is-active"
              }" src="src/assets/icons/doc.svg" alt="Main View" />
            </a>
          </li>
          <li class="view-nav__tab">
            <a href="#" data-path="/calendar-view">
              <img class="${
                currView === "/calendar-view" && "is-active"
              }" src="src/assets/icons/calendar.svg" alt="Calendar View" />
            </a>
          </li>
          <li class="view-nav__tab">
            <a href="#" data-path="/chart-view">
              <img class="${
                currView === "/chart-view" && "is-active"
              }" src="src/assets/icons/chart.svg" alt="Chart View" />
            </a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
