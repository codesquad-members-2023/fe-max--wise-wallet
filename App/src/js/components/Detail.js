import { Element } from "../Element.js";

export class Detail extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("UL");
    this.domNode.className = "detail";
    
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
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
      `
    )
  }
}
