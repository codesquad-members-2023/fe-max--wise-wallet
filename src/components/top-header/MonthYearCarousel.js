import { months } from "../../constants/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="month-year__carousel">
    <button class="month-year__carousel__btn previous" name="previous">
      <img src="src/assets/icons/chevron-left.svg" alt="Previous Day" />
    </button>
    <div class="month-year__container">
      <div id="year"></div>
      <div id="month-num"></div>
      <div id="month-char"></div>
    </div>
    <button class="month-year__carousel__btn next" name="next">
      <img src="src/assets/icons/chevron-right.svg" alt="Next Day" />
    </button>
  </div>

  <style>
    .month-year__carousel {
      width: 232px;
      height: 96px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .month-year__container {
      width: 120px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-style: normal;
      text-align: center;
    }
    
    .month-year__container #month-num {
      width: 100%;
      font-weight: var(--fw-display-large);
      font-size: var(--fs-display-large);
      line-height: var(--lh-display-large);
    }
    
    .month-year__container #year,
    .month-year__container #month-char {
      width: 100%;
      height: 16px;
      font-family: var(--ff-body);
      font-weight: var(--fw-bold);
      font-size: var(--fs-bold-regular);
      line-height: var(--lh-bold-regular);
    }
    
    .month-year__carousel__btn {
      height: 18px;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
    }
    
    .month-year__carousel__btn > img {
      filter: var(--filter-white);
      cursor: pointer;
    }
  </style>
`;

class MonthYearCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const btns = this.shadowRoot.querySelectorAll(".month-year__carousel__btn");

    this.updateDateDisplay(new Date());
    btns.forEach((btn) => {
      btn.addEventListener("click", this.handleBtnClick.bind(this, btn.name));
    });
  }

  handleBtnClick(btnName) {
    const currYear = this.shadowRoot.querySelector("#year").innerText;
    const currMonthNum = this.shadowRoot.querySelector("#month-num").innerText;

    if (btnName === "previous") {
      const prevMonth = new Date(currYear, currMonthNum - 2);
      this.updateDateDisplay(prevMonth);
    } else if (btnName === "next") {
      const nextMonth = new Date(currYear, parseInt(currMonthNum));
      this.updateDateDisplay(nextMonth);
    }
  }

  updateDateDisplay(date) {
    const yearDisplay = this.shadowRoot.querySelector("#year");
    const monthNumDisplay = this.shadowRoot.querySelector("#month-num");
    const monthCharDisplay = this.shadowRoot.querySelector("#month-char");

    yearDisplay.innerText = date.getFullYear();
    monthNumDisplay.innerText = date.getMonth() + 1;
    monthCharDisplay.innerText = months[date.getMonth()];
  }
}

customElements.define("month-year-carousel", MonthYearCarousel);
