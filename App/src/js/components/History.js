import { Element } from "../Element.js";
import { getCategoryString, dateFormat } from "../utils.js";
import { CHECKED, DELETE_LARGE, UNCHECKED } from "../SVG.js";
import { $classElement } from "../dom.js";

function ActiveCheckBoxView({ name }) {
  return ` 
    <input
    type="checkbox"
    class="blind"
    name="${name}"
    id="${name}"
    aria-hidden="true"
    tabindex="-1"
    checked />
  `;
}

function ActiveItemView({ name, attr, title, desc }) {
  return `
    <li>
      <label
        tabindex="0"
        aria-label="${attr["aria-label"]}"
        for="${name}">
        ${UNCHECKED}
        ${CHECKED}
        <dl>
          <dt>${title}</dt>
          <dd>${desc.toLocaleString()}</dd>
        </dl>
      </label>
    </li>
  `;
}

function HistoryDateBodyItemView({ category, body, payment, price }, index) {
  const categoryString = getCategoryString(category);
  const { dateTime } = this;

  return `
  <li tabindex="0" class="list__item" data-type="${
    price > 0 ? "expenditure" : "income"
  }" data-date="${dateTime}"  data-index="${index}" >
    <span
      class="category"
      data-category="${category}"
      aria-label="${categoryString} 카테고리"
      >${categoryString}</span
    >
    <span
      class="body"
      aria-label="거래내용 ${body}"
      >${body}</span
    >
    <span
      class="payment"
      aria-label="결제수단 ${payment}"
      >${payment}</span
    >
    <span
      class="price"
      aria-label="${price > 0 ? "수입" : "지출"} 금액 ${Math.abs(
    price
  ).toLocaleString()}원"
      >${price.toLocaleString()}원</span
    >
    <button class="delete" tabindex="-1">
      ${DELETE_LARGE}
      삭제하기
    </button>
  </li>
  `;
}

function HistoryDetailItemView([dateTime, record]) {
  const date = new Date(parseInt(dateTime));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayName = date.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  const { totalIncome, totalExpenditure, data } = record;

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
              totalIncome != 0
                ? `<dt data-type="expenditure">수입</dt><dd data-type="expenditure">${totalIncome.toLocaleString()}원</dd>`
                : ""
            }
            ${
              totalExpenditure != 0
                ? `<dt data-type="income">지출</dt><dd data-type="income">${totalExpenditure.toLocaleString()}원</dd>`
                : ""
            }
          </dl>
        </div>
        <div class="date__body">
          <ul class="body__list">
            ${[...data]
              .sort((a, b) => b.id - a.id)
              .map(HistoryDateBodyItemView.bind({ dateTime }))
              .join("")}
          </ul>
        </div>
      </article>
    </li>
  `;
}

function HistoryDetailView({ date }) {
  return `
    <ul class="history__detail">
      ${Object.entries(date)
        .sort((a, b) => b[0] - a[0])
        .map(HistoryDetailItemView)
        .join("")}
    </ul>
  `;
}

export class History extends Element {
  constructor() {
    super();
  }
  init() {
    if (!this.domNode) {
      this.domNode = document.createElement("ARTICLE");
      this.domNode.id = "history";
    }

    const historyData = this.system.getHistory();
    const activeList = [
      {
        name: "expenditure",
        attr: { "aria-label": "수입내역 활성화" },
        title: "수입",
        desc: historyData["totalExpenditure"],
      },
      {
        name: "income",
        attr: { "aria-label": "지출내역 활성화" },
        title: "지출",
        desc: historyData["totalIncome"],
      },
    ];

    const historyDetailHTML = HistoryDetailView(historyData);
    this.domNode.innerHTML = `
      <h2 class="blind">입출금 내역</h2>
      ${activeList.map(ActiveCheckBoxView).join("")}
      <div class="history__info">
        <h3 tabindex="0">전체내역<span>13</span>건</h3>
        <ul class="active-list">
          ${activeList.map(ActiveItemView).join("")}
        </ul>
      </div>
      <ul class="history__detail">
        ${historyDetailHTML}
      </ul>
    `;

    const bodyListItems = this.domNode.querySelectorAll(".list__item");

    bodyListItems.forEach((item) => {
      item.addEventListener("click", this.setUpdate);
    });
  }
}

History.prototype.setUpdate = function (e) {
  const $inputbar = $classElement("Inputbar").domNode;
  const listItem = e.currentTarget;
  const current = new Date(parseInt(listItem.dataset.date));
  const dateValue = dateFormat(current).replaceAll("-", "");

};
