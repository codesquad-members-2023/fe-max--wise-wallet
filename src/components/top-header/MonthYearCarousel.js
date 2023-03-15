import { months } from "../../constants/index.js";
import { currDate } from "../../store/index.js";

class MonthYearCarousel extends HTMLElement {
  constructor() {
    super();
    // some state for currDate
  }

  connectedCallback() {
    this.render();

    //- Month Year Carousel
    this.querySelectorAll(".month-year__carousel__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.name;
        if (action === "previous") {
          // --increment `currDate`'s month!!!!!!!!!!
          // const prevMonth = new Date(currYear, currMonthNum - 2);
          // yearDisplay.innerText = prevMonth.getFullYear();
          // monthNumDisplay.innerText = prevMonth.getMonth() + 1;
          // monthCharDisplay.innerText = months[prevMonth.getMonth()];
        } else {
          // --decrement `currDate`'s month!!!!!!!!!!
          // const nextMonth = new Date(currYear, parseInt(currMonthNum));
          // yearDisplay.innerText = nextMonth.getFullYear();
          // monthNumDisplay.innerText = nextMonth.getMonth() + 1;
          // monthCharDisplay.innerText = months[nextMonth.getMonth()];
        }
      });
    });
  }

  render() {
    this.innerHTML = `
      <div class="month-year__carousel">
        <button class="month-year__carousel__btn previous" name="previous">
          <img src="src/assets/icons/chevron-left.svg" alt="Previous Day" />
        </button>
        <div class="month-year__container">
          <div id="year">${currDate.getFullYear()}</div>
          <div id="month-num">${currDate.getMonth() + 1}</div>
          <div id="month-char">${months[currDate.getMonth()]}</div>
        </div>
        <button class="month-year__carousel__btn next" name="next">
          <img src="src/assets/icons/chevron-right.svg" alt="Next Day" />
        </button>
      </div>
    `;
  }
}

customElements.define("month-year-carousel", MonthYearCarousel);
