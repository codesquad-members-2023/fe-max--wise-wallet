class MainPage extends HTMLElement {
  constructor() {
    super();
  }

  // Runs whenever the element is injected into the DOM.
  connectedCallback() {
    // fetch data from store.
    // add event listeners.
    this.render();
  }

  // Runs whenever the element is removed from the DOM.
  disconnectedCallback() {}

  render() {
    this.innerHTML = `
      <top-header></top-header>

      <main>
        <input-bar></input-bar>

        <section class="entries">
          <header class="entries-header">
            <h2>전체 내역 0건</h2>
            <label for="income">
              <input type="checkbox" name="income" id="income" checked />
              <span>수입 0</span>
            </label>
            <label for="expense">
              <input type="checkbox" name="expense" id="expense" checked />
              <span>지출 0</span>
            </label>
          </header>

          <section class="entries-body">
            <article class="entries-per-day">
              <header>
                <h3>3월13일 월</h3>
                <div class="entries-per-day__summary">
                  <span>수입 2,010,580원</span>
                  <span>지출 33,333원</span>
                </div>
              </header>

              <ul class="entries-container">
                <li class="entries__entry">
                  <span>생활</span>
                  <span>칫솔 6개 세트, 치약 3개 세트</span>
                  <span>비씨카드</span>
                  <span>-33,333원</span>
                </li>
                <li class="entries__entry">
                  <span>월급</span>
                  <span>3월 급여</span>
                  <span>현금</span>
                  <span>2,010,580원</span>
                </li>
              </ul>
            </article>

            <article class="entries-per-day">
              <header>
                <h3>3월12일 일</h3>
                <div class="entries-per-day__summary">
                  <span>지출 33,333원</span>
                </div>
              </header>

              <ul class="entries-container">
                <li class="entries__entry">
                  <span>식비</span>
                  <span>빵</span>
                  <span>비씨카드</span>
                  <span>-11,111원</span>
                </li>
              </ul>
            </article>
          </section>
        </section>
      </main>
    `;
  }
}

customElements.define("main-page", MainPage);
