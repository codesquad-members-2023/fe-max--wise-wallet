import { Element } from "../Element.js";
import { get12Month, getCategoryString } from "../util.js";
import { CHECKED, DELETE_LARGE, UNCHECKED } from "./SVG.js";

function ActiveItemView({ name, attr, title, desc }) {
  return `
    <li>
      <input
        type="checkbox"
        class="blind"
        name="${name}"
        id="${name}"
        checked />
      <label
        tabindex="0"
        aria-label="${attr["aria-label"]}"
        for="${name}">
        ${UNCHECKED}
        ${CHECKED}
      </label>
      <dl tabindex="0">
        <dt>${title}</dt>
        <dd>${desc.toLocaleString()}</dd>
      </dl>
    </li>
  `;
}

function HistoryDateBodyItemView({ category, body, payment, price }) {
  const categoryString = getCategoryString(category);
  return `
  <li tabindex="0" class="list__item">
    <span
      class="category"
      data-category="${category}"
      aria-label="${categoryString} 카테고리"
      >${categoryString}</span
    >
    <span
      class="body"
      aria-describedby="거래내용 ${body}"
      >${body}</span
    >
    <span
      class="payment"
      aria-describedby="결제수단 ${payment}"
      >${payment}</span
    >
    <span
      class="price"
      aria-describedby="${price > 0 ? "수입" : "지출"} 금액 ${Math.abs(
    price
  ).toLocaleString()}원"
      >${price.toLocaleString()}원</span
    >
    <button class="delete">
      ${DELETE_LARGE}
      삭제하기
    </button>
  </li>
  `;
}

function HistoryDetailItemView([dateTime, record]) {
  const date = new Date(parseInt(dateTime));
  const year = date.getFullYear();
  const month = get12Month.bind(date)();
  const day = date.getDate();
  const dayName = date.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  let income = 0;
  let expenditure = 0;

  record.forEach(({ price }) => {
    price > 0 ? (income += price) : (expenditure += price);
  });

  return `
    <li class="detail-item">
      <article class="detail__date">
        <div class="date__header">
          <h4
            tabindex="0"
            aria-label="날짜 ${month}월 ${day}일 ${dayName}"
            class="header__date-day">
            <span class="date">${month}월 ${day}일</span
            ><span class="day">${dayName[0]}</span>
          </h4>
          <dl tabindex="0" class="header__income-expenditure">
            ${
              income != 0
                ? `<dt>수입</dt><dd>${income.toLocaleString()}원</dd>`
                : ""
            }
            ${
              expenditure != 0
                ? `<dt>지출</dt><dd>${expenditure.toLocaleString()}원</dd>`
                : ""
            }
          </dl>
        </div>
        <div class="date__body">
          <ul class="body__list">
            ${record.map(HistoryDateBodyItemView).join("")}
          </ul>
        </div>
      </article>
    </li>
  `;
}

function HistoryDetailView(historyData) {
  return `
    <ul class="history__detail">
      ${Object.entries(historyData).map(HistoryDetailItemView).join("")}
    </ul>
  `;
}

export class History extends Element {
  constructor() {
    super();
  }
  init() {
    this.domNode = document.createElement("ARTICLE");
    this.domNode.id = "history";

    let totalIncome = 0;
    let totalExpenditure = 0;

    const activeList = [
      {
        name: "income",
        attr: { "aria-label": "수입내역 활성화" },
        title: "수입",
        desc: totalIncome,
      },
      {
        name: "expenditure",
        attr: { "aria-label": "지출내역 활성화" },
        title: "지출",
        desc: totalExpenditure,
      },
    ];

    const historyData = {};
    historyData[new Date("2023-2-17").getTime()] = [
      {
        id: 1,
        category: 0,
        body: "칫솔 6개 세트, 치약 3개 세트",
        payment: "비씨카드",
        price: -36450,
      },
      {
        id: 2,
        category: 1,
        body: "잔치국수와 김밥",
        payment: "비씨카드",
        price: -36450,
      },
    ];

    historyData[new Date("2023-2-18").getTime()] = [
      {
        id: 1,
        category: 0,
        body: "칫솔 6개 세트, 치약 3개 세트",
        payment: "비씨카드",
        price: -36450,
      },
      {
        id: 2,
        category: 1,
        body: "잔치국수와 김밥",
        payment: "비씨카드",
        price: -36450,
      },
    ];

    const historyDetailHTML = HistoryDetailView(historyData);
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <article id="history">
          <h2 class="blind">입출금 내역</h2>
          <div class="history__info">
            <h3 tabindex="0">전체내역<span>13</span>건</h3>
            <ul aria-labelledby="income">
              ${activeList.map(ActiveItemView).join("")}
            </ul>
          </div>
          <ul class="history__detail">
            ${historyDetailHTML}
          </ul>
        </article>
      `
    )
  }
}
