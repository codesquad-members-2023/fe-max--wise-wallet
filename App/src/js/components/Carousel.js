export class Carousel {
  constructor(id, className, attrs) {
    this.domNode = null;
    this.init();
    this.domNode.id = id;
    this.domNode.className = className;
    Object.entries(attrs).forEach(([name, value]) => {
      this.domNode.setAttribute(name, value);
    });
  }

  init() {
    this.domNode = document.createElement("article");
    this.domNode.innerHTML = `
    <div class="carousel-inner">
      <div class="controls">
        <button
          type="button"
          class="previous"
          aria-controls="myCarousel-items"
          aria-label="이전달">
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
        </button>

        <button
          type="button"
          class="next"
          aria-controls="myCarousel-items"
          aria-label="다음달">
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
        </button>
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

  view() {
    return this.domNode.outerHTML;
  }
}
