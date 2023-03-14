import { Element } from "../Element.js";
import { Inputbar } from "./Inputbar.js";

export class Main extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("MAIN");
    const inputbar = new Inputbar();
    const inputbarHTML = inputbar.view();

    this.domNode.innerHTML = `
      <div class="inner">
        <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
          ${inputbarHTML}
          <!-- 입출금 내역 -->
          <article id="history">
            <h2 class="blind">입출금 내역</h2>
            <div class="history__info">
              <h3 tabindex="0">전체내역<span>13</span>건</h3>
              <ul aria-labelledby="income">
                <li>
                  <input
                    type="checkbox"
                    class="blind"
                    name="income"
                    id="income"
                    checked />
                  <label
                    tabindex="0"
                    aria-label="수입내역 활성화"
                    for="income">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2.75"
                        y="2.75"
                        width="18.5"
                        height="18.5"
                        rx="4.25"
                        stroke="#524D90"
                        stroke-width="1.5" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#524D90" />
                      <path
                        d="M17 9L10.125 15.6667L7 12.6364"
                        stroke="#FCFCFC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </label>
                  <dl tabindex="0">
                    <dt>수입</dt>
                    <dd>2,000,000</dd>
                  </dl>
                </li>
                <li>
                  <input
                    class="blind"
                    type="checkbox"
                    name="expenditure"
                    id="expenditure"
                    checked />
                  <label
                    tabindex="0"
                    aria-label="지출내역 활성화"
                    for="expenditure">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2.75"
                        y="2.75"
                        width="18.5"
                        height="18.5"
                        rx="4.25"
                        stroke="#524D90"
                        stroke-width="1.5" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        fill="#524D90" />
                      <path
                        d="M17 9L10.125 15.6667L7 12.6364"
                        stroke="#FCFCFC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </label>
                  <dl tabindex="0">
                    <dt>지출</dt>
                    <dd>798,180</dd>
                  </dl>
                </li>
              </ul>
            </div>
            <ul class="history__detail">
              <li class="detail-item">
                <article class="detail__date">
                  <div class="date__header">
                    <h4
                      tabindex="0"
                      aria-label="날짜 2월 17일 금요일"
                      class="header__date-day">
                      <span class="date">2월 17일</span
                      ><span class="day">금</span>
                    </h4>
                    <dl tabindex="0" class="header__income-expenditure">
                      <dt>수입</dt>
                      <dd>2,000,000원</dd>
                      <dt>지출</dt>
                      <dd>9,500원</dd>
                    </dl>
                  </div>
                  <div class="date__body">
                    <ul class="body__list">
                      <li tabindex="0" class="list__item">
                        <span
                          class="category"
                          data-category="0"
                          aria-label="생활 카테고리"
                          >생활</span
                        >
                        <span
                          class="body"
                          aria-describedby="거래내용 칫솔 6개 세트, 치약 3개 세트"
                          >칫솔 6개 세트, 치약 3개 세트</span
                        >
                        <span
                          class="payment"
                          aria-describedby="결제수단 비씨카드"
                          >비씨카드</span
                        >
                        <span
                          class="price"
                          aria-describedby="소비 금액 36,460원"
                          >-36,460원</span
                        >
                        <button class="delete">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.75732 7.75732L16.2426 16.2426"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M7.75732 16.2427L16.2426 7.75739"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                          삭제하기
                        </button>
                      </li>
                      <li tabindex="0" class="list__item">
                        <span class="category" data-category="1">식비</span>
                        <span class="body">잔치국수와 김밥</span>
                        <span class="payment">현대카드</span>
                        <span class="price">-36,460원</span>
                        <button class="delete">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.75732 7.75732L16.2426 16.2426"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M7.75732 16.2427L16.2426 7.75739"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                          삭제하기
                        </button>
                      </li>
                    </ul>
                  </div>
                </article>
              </li>
              <li class="detail-item">
                <article class="detail__date">
                  <div class="date__header">
                    <h4
                      tabindex="0"
                      aria-label="날짜 2월 17일 금요일"
                      class="header__date-day">
                      <span class="date">2월 17일</span
                      ><span class="day">금</span>
                    </h4>
                    <dl tabindex="0" class="header__income-expenditure">
                      <dt>수입</dt>
                      <dd>2,000,000원</dd>
                      <dt>지출</dt>
                      <dd>9,500원</dd>
                    </dl>
                  </div>
                  <div class="date__body">
                    <ul class="body__list">
                      <li tabindex="0" class="list__item">
                        <span
                          class="category"
                          data-category="0"
                          aria-label="생활 카테고리"
                          >생활</span
                        >
                        <span
                          class="body"
                          aria-describedby="거래내용 칫솔 6개 세트, 치약 3개 세트"
                          >칫솔 6개 세트, 치약 3개 세트</span
                        >
                        <span
                          class="payment"
                          aria-describedby="결제수단 비씨카드"
                          >비씨카드</span
                        >
                        <span
                          class="price"
                          aria-describedby="소비 금액 36,460원"
                          >-36,460원</span
                        >
                        <button class="delete">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.75732 7.75732L16.2426 16.2426"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M7.75732 16.2427L16.2426 7.75739"
                              stroke="#E75B3F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                          삭제하기
                        </button>
                      </li>
                    </ul>
                  </div>
                </article>
              </li>
            </ul>
          </article>
        </div>
        <div
          id="tabpanel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
          class="is-hidden">
          <h1 class="blind">달력</h1>
          <table id="calender">
            <colgroup>
              <col span="7" />
            </colgroup>
            <thead>
              <tr>
                <th>일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
              <tr>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="tabpanel-3"
          role="tabpanel"
          aria-labelledby="tab-3"
          class="is-hidden">
          <h1 class="blind">통계</h1>
          <article id="PieChartBoard">
            <h2 class="blind">파이차트</h2>
            <figure class="PieChartBoard__chart">
              <div
                class="chart"
                style="
                  --data-category0: 64%;
                  --data-category1: 79%;
                  --data-category2: 86%;
                  --data-category3: 92%;
                  --data-category4: 97%;
                  --data-category5: 99%;
                  --data-category6: 100%;
                ">
                <div class="center"></div>
              </div>
              <figcaption class="blind">차트 영역</figcaption>
            </figure>
            <article class="PieChartBoard__board">
              <h3 class="blind">보드 영역</h3>
              <dl>
                <dt>이번 달 지출 금액</dt>
                <dd>836,640원</dd>
              </dl>
              <ul class="board__info">
                <li class="info__item">
                  <span class="category" data-category="0">생활</span>
                  <span class="percent">64%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="1">의료/건강</span>
                  <span class="percent">15%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="2">쇼핑/뷰티</span>
                  <span class="percent">7%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="3">교통</span>
                  <span class="percent">6%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="4">식비</span>
                  <span class="percent">5%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="5">문화/여가</span>
                  <span class="percent">2%</span>
                  <span class="price">536,460원</span>
                </li>
                <li class="info__item">
                  <span class="category" data-category="6">미분류</span>
                  <span class="percent">1%</span>
                  <span class="price">536,460원</span>
                </li>
              </ul>
            </article>
          </article>
          <article id="graph">
            <h3>생활 카테고리 소비 추이</h3>
            <figure></figure>
          </article>

          <ul class="detail">
            <li class="detail-item">
              <article class="detail__date">
                <div class="date__header">
                  <h4
                    tabindex="0"
                    aria-label="날짜 2월 17일 금요일"
                    class="header__date-day">
                    <span class="date">2월 17일</span
                    ><span class="day">금</span>
                  </h4>
                  <dl tabindex="0" class="header__income-expenditure">
                    <dt>수입</dt>
                    <dd>2,000,000원</dd>
                    <dt>지출</dt>
                    <dd>9,500원</dd>
                  </dl>
                </div>
                <div class="date__body">
                  <ul class="body__list">
                    <li tabindex="0" class="list__item">
                      <span
                        class="category"
                        data-category="0"
                        aria-label="생활 카테고리"
                        >생활</span
                      >
                      <span
                        class="body"
                        aria-describedby="거래내용 칫솔 6개 세트, 치약 3개 세트"
                        >칫솔 6개 세트, 치약 3개 세트</span
                      >
                      <span
                        class="payment"
                        aria-describedby="결제수단 비씨카드"
                        >비씨카드</span
                      >
                      <span
                        class="price"
                        aria-describedby="소비 금액 36,460원"
                        >-36,460원</span
                      >
                    </li>
                    <li tabindex="0" class="list__item">
                      <span class="category" data-category="1">식비</span>
                      <span class="body">잔치국수와 김밥</span>
                      <span class="payment">현대카드</span>
                      <span class="price">-36,460원</span>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li class="detail-item">
              <article class="detail__date">
                <div class="date__header">
                  <h4
                    tabindex="0"
                    aria-label="날짜 2월 17일 금요일"
                    class="header__date-day">
                    <span class="date">2월 17일</span
                    ><span class="day">금</span>
                  </h4>
                  <dl tabindex="0" class="header__income-expenditure">
                    <dt>수입</dt>
                    <dd>2,000,000원</dd>
                    <dt>지출</dt>
                    <dd>9,500원</dd>
                  </dl>
                </div>
                <div class="date__body">
                  <ul class="body__list">
                    <li tabindex="0" class="list__item">
                      <span
                        class="category"
                        data-category="0"
                        aria-label="생활 카테고리"
                        >생활</span
                      >
                      <span
                        class="body"
                        aria-describedby="거래내용 칫솔 6개 세트, 치약 3개 세트"
                        >칫솔 6개 세트, 치약 3개 세트</span
                      >
                      <span
                        class="payment"
                        aria-describedby="결제수단 비씨카드"
                        >비씨카드</span
                      >
                      <span
                        class="price"
                        aria-describedby="소비 금액 36,460원"
                        >-36,460원</span
                      >
                    </li>
                  </ul>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
