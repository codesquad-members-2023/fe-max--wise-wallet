export const drawInputbar = () => {
  const $main = document.getElementById("main");
  const inputBar = `<div id="input_bar">
    <form id="input_bar_form" action="">
      <fieldset class="bold-small">
        <div>
          <legend>일자</legend>
          <input
            id="input_date"
            type="number"
            name="input_date"
            class="body-regular"
            autocomplete="off"
            max="99999999"
          />
        </div>
      </fieldset>
      <fieldset class="bold-small">
        <legend>금액</legend>

        <input type="checkbox" name="price_toggle" id="price_toggle" />
        <label id="price_checkbox" for="price_toggle" autocomplete="off">
        </label>
        <div>
          <input
            type="text"
            id="input_price"
            class="body-regular"
            placeholder="0"
            autocomplete="off"
            value=""
          />
          <span class="body-regular primary">원</span>
        </div>
      </fieldset>
      <fieldset class="bold-small">
        <legend>내용</legend>
        <input
          type="text"
          id="input_content"
          name="input_content"
          class="body-regular"
          placeholder="입력하세요"
          autocomplete="off"
        />
      </fieldset>
      <fieldset class="bold-small">
        <legend>결제수단</legend>
        <div id="payment_select" class="select select_box">
          <div class="selected">
            <div class="selected_text body-regular">선택하세요</div>
            <input
              id="payment_value"
              class="selected_value"
              type="text"
              value=""
            />
            <div class="arrow"></div>
          </div>
          <ul>
            <li class="option body-regular">
              <span class="option">현금</span>
              <button
                class="remove_option_btn reset-btn"
                type="button"
              ></button>
            </li>
            <li class="option body-regular">
              <span class="option">신용카드</span>
              <button
                class="remove_option_btn reset-btn"
                type="button"
              ></button>
            </li>
            <li id="add-option" class="body-regular">
              <span class="">추가하기</span>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset class="bold-small">
        <div>
          <legend>분류</legend>
          <div id="category_select" class="select select_box">
            <div class="selected">
              <div class="selected_text body-regular">선택하세요</div>
              <input
                id="category_value"
                class="selected_value"
                type="text"
                value=""
              />
              <div class="arrow"></div>
            </div>
            <ul id="drop_menu">
              <li class="option body-regular">
                <span class="option">생활</span>
              </li>
              <li class="option body-regular">
                <span class="option">식비</span>
              </li>
              <li class="option body-regular">
                <span class="option">교통</span>
              </li>
              <li class="option body-regular">
                <span class="option">쇼핑/뷰티</span>
              </li>
              <li class="option body-regular">
                <span class="option">의료/건강</span>
              </li>
              <li class="option body-regular">
                <span class="option">문화/여가</span>
              </li>
              <li class="option body-regular">
                <span class="option">미분류</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          id="input_checkbox"
          class="reset-btn"
          type="button"
          disabled
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              fill="#A79FCB"
            />
            <path
              d="M17 9L10.125 15.6667L7 12.6364"
              stroke="#FCFCFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </fieldset>
    </form>
  </div>`;

  $main.innerHTML = inputBar;
};
