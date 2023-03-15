import { Element } from "../Element.js";

export class PieChartBoard extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("ARTICLE");
    this.domNode.id = "PieChartBoard";
    
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      ` 
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
      `
    )
  }
}
