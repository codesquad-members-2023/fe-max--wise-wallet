import { Element } from "../Element.js";
import { nextMonth, previousMonth } from "../util.js";
import { NEXT, PREVIOUS } from "./SVG.js";

const SVG = {
  previous: PREVIOUS,
  next: NEXT,
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

function CarouselItemView(when) {
  const year = when.getFullYear();
  const month = when.getMonth() + 1;
  return `
    <div
      class="carousel-item"
      role="group"
      tabindex="0"
      aria-roledescription="slide"
      aria-label="가계부 기준날짜 ${year}년 ${month}월">
      <p class="year">${year}</p>
      <p class="month">${month}</p>
      <p class="month-name">${when.toLocaleString("en-us", {
        month: "long",
      })}</p>
    </div>
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

    const current = this.system.getCurrent();

    const nextHTML = ButtonArrowView("next", { "aria-label": "다음달" });
    const carouselItemHTML = CarouselItemView(current);

    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="carousel-inner">
          <div class="controls">
            ${previousHTML}
            ${nextHTML}
          </div>

          <div id="myCarousel-items" class="carousel-items" aria-live="off">
            <!-- 라벨바꾸어 줄것 -->
            ${carouselItemHTML}
          </div>
        </div>
      `
    );

    const previousButton = this.domNode.querySelector(".previous");

    previousButton.addEventListener(
      "click",
      this.toPreviousMonth.bind([this, previousButton]),
      { once: true }
    );

    const nextButton = this.domNode.querySelector(".next");
    nextButton.addEventListener(
      "click",
      this.toNextMonth.bind([this, nextButton]),
      { once: true }
    );
  }
}

Carousel.prototype.toPreviousMonth = function () {
  const [carousel, previousButton] = this;
  const current = carousel.system.getCurrent();
  const previous = previousMonth(current);
  const carouselItems = carousel.domNode.querySelector(".carousel-items");
  const previousCarouselItemView = CarouselItemView(previous);
  carouselItems.innerHTML = previousCarouselItemView + carouselItems.innerHTML;
  carousel.system.setCurrent(previous);
  carouselItems.querySelectorAll(".carousel-item").forEach((carouselItem) => {
    carouselItem.style.transition = "";
    carouselItem.style.transform = "translate(-100%, 0)";
    carouselItem.style.transition = "transform 300ms";
    setTimeout(() => {
      carouselItem.style.transform = "translate(0, 0)";
    }, 1);
  });
  previousButton.removeEventListener("click", carousel.toPreviousMonth);
  setTimeout(() => {
    carouselItems.innerHTML = previousCarouselItemView;
    previousButton.addEventListener(
      "click",
      carousel.toPreviousMonth.bind([carousel, previousButton]),
      { once: true }
    );
  }, 300);
};

Carousel.prototype.toNextMonth = function () {
  const [carousel, nextButton] = this;
  const current = carousel.system.getCurrent();
  const next = nextMonth(current);
  const carouselItems = carousel.domNode.querySelector(".carousel-items");
  const nextCarouselItemView = CarouselItemView(next);
  carouselItems.innerHTML = carouselItems.innerHTML + nextCarouselItemView;
  carousel.system.setCurrent(next);
  carouselItems.querySelectorAll(".carousel-item").forEach((carouselItem) => {
    setTimeout(() => {
      carouselItem.style.transform = "translate(-100%, 0)";
    }, 1);
  });
  nextButton.removeEventListener("click", carousel.toNextMonth);
  setTimeout(() => {
    carouselItems.innerHTML = nextCarouselItemView;
    nextButton.addEventListener(
      "click",
      carousel.toNextMonth.bind([carousel, nextButton]),
      { once: true }
    );
  }, 300);
};

