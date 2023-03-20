const template = document.createElement("template");
template.innerHTML = `
  <header class="top-header">
    <div class="top-header__inner-wrapper">
      <div class="logo">
        <img src="src/assets/icons/logo.svg" alt="Wise Wallet Logo" />
      </div>

      <month-year-carousel></month-year-carousel>

      <nav-bar></nav-bar>
    </div>
  </header>

  <style>
    :host {
      width: 100%;
    }

    .top-header {
      width: 100%;
      height: 194px;
      display: flex;
      justify-content: center;
      background-color: var(--color-primary);
      font-family: var(--ff-display);
      color: var(--color-white);
    }
    
    .top-header__inner-wrapper {
      width: var(--layout-inner-width);
      height: 96px;
      margin-top: 40px;
      padding-inline: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      height: 24px;
    }
  </style>
`;

class TopHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("top-header", TopHeader);
