import { routes } from "../../routes.js";

const template = document.createElement("template");
template.innerHTML = `
  <nav class="view-nav">
    <ul>
      <li class="view-nav__tab">
        <a href="#" data-path="/">
          <img class="is-active" src="src/assets/icons/doc.svg" alt="Main View" />
        </a>
      </li>
      <li class="view-nav__tab">
        <a href="#" data-path="/calendar-view">
          <img src="src/assets/icons/calendar.svg" alt="Calendar View" />
        </a>
      </li>
      <li class="view-nav__tab">
        <a href="#" data-path="/chart-view">
          <img src="src/assets/icons/chart.svg" alt="Chart View" />
        </a>
      </li>
    </ul>
  </nav>

  <style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .view-nav {
      width: 132px;
      height: 44px;
    }
    
    .view-nav ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      list-style: none;
    }
    
    .view-nav__tab {
      width: 44px;
      height: 100%;
      padding: 10px;
      display: flex;
    }
    
    .view-nav__tab > a > img {
      filter: var(--filter-primary-alt);
      cursor: pointer;
    }
    
    .view-nav__tab > a > img.is-active {
      filter: var(--filter-white);
    }
  </style>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const tabs = this.shadowRoot.querySelectorAll("a");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (evt) => {
        evt.preventDefault();
        const newPathname = tab.dataset.path;
        this.navigateTo(newPathname);
        this.updateTabsIconColor(tabs, newPathname);
      });
    });
  }

  navigateTo(newPathname) {
    window.history.pushState(
      {},
      newPathname,
      window.location.origin + newPathname
    );
    document.getElementById("root").innerHTML = routes[newPathname];
  }

  updateTabsIconColor(tabs, newPathname) {
    tabs.forEach((tab) => {
      if (tab.dataset.path === newPathname) {
        tab.querySelector("img").classList.add("is-active");
      } else {
        tab.querySelector("img").classList.remove("is-active");
      }
    });
  }
}

customElements.define("nav-bar", NavBar);
