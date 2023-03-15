import { routes } from "../../routes.js";

class TopHeader extends HTMLElement {
  constructor() {
    super();
  }

  navClickHandler(pathName) {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    document.getElementById("root").innerHTML =
      routes[pathName.replace("index.html", "")];
  }

  connectedCallback() {
    this.render();

    //- View Tabs
    this.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (evt) => {
        evt.preventDefault();
        this.navClickHandler(a.dataset.path);
      });
    });
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = `
      <header class="top-header">
        <div class="top-header__inner-wrapper">
          <div class="logo">
            <img src="src/assets/icons/logo.svg" alt="Wise Wallet Logo" />
          </div>
      
          <month-year-carousel></month-year-carousel>
      
          <nav-bar></nav-bar>
        </div>
      </header>
    `;
  }
}

customElements.define("top-header", TopHeader);
