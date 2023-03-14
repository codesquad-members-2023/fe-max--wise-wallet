import { Element } from "../Element.js";

const SVG = {
  previous: `
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1L1 9L9 17"
        stroke="#FCFCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
  next: `
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1L9 9L1 17"
        stroke="#FCFCFC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
};

function ButtonArrowView(className, attrs) {
  return `
    <button
      type="button"
      class="${className}"
      aria-controls="myCarousel-items"
      aria-label="${attrs["aria-label"]}">
      ${SVG[className]}
    </button>
  `;
}

export class Carousel extends Element {
  constructor(id, className, attrs) {
    super();
    this.domNode.id = id;
    this.domNode.className = className;
    Object.entries(attrs).forEach(([name, value]) => {
      this.domNode.setAttribute(name, value);
    });
  }

  init() {
    this.domNode = document.createElement("article");
    const previousHTML = ButtonArrowView("previous", {
      "aria-label": "이전달",
    });
    const nextHTML = ButtonArrowView("next", { "aria-label": "다음달" });
    this.domNode.innerHTML = `
    <div class="carousel-inner">
      <div class="controls">
        ${previousHTML}
        ${nextHTML}
      </div>

      <div id="myCarousel-items" class="carousel-items" aria-live="off">
        <!-- 라벨바꾸어 줄것 -->
        <div
          class="carousel-item active"
          role="group"
          tabindex="0"
          aria-roledescription="날짜 표시"
          aria-label="내용">
          <p class="year">2023</p>
          <p class="month">2</p>
          <p class="monthName">February</p>
        </div>
      </div>
    </div>
    `;
  }
}
