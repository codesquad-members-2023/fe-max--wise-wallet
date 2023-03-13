export class Logo {
  constructor() {
    this.domNode = null;
    this.init();
  }

  init() {
    this.domNode = document.createElement("h1");
    this.domNode.id = "logo";
    this.domNode.innerHTML = `
      <a
        class="display display--small"
        href="#"
        aria-label="지혜로운 지갑">
        <span>Wise</span>
        <span>wallet</span>
      </a>
    `;
  }

  view() {
    return this.domNode.outerHTML;
  }
}
