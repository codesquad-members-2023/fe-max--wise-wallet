import { $ } from "./dom.js";

export const generateListDetail = (sameDayArray) => {
  console.log(sameDayArray[0].date);
  const ListDetailBox = document.querySelector(
    `.list-date-${sameDayArray[0].date}`
  );

  if (!$("#plus-minus-btn").checked) {
    const expenditureList = sameDayArray.filter((el) => el.type === false);
    ListDetailBox.insertAdjacentHTML(
      "beforeend",
      `
    <li>
    <div class="list-detail">
        <div class="list-detail-category">
            <span>${expenditureList[expenditureList.length - 1].category}</span>
        </div>
        <span class="list-detail-body ">${
          expenditureList[expenditureList.length - 1].memo
        }</span>
        <span class="list-detail-payment list-detail-item">${
          expenditureList[expenditureList.length - 1].payment
        }</span>
        <span class="list-detail-price list-detail-item" style="color: ${
          $("#plus-minus-btn").checked ? "blue" : "red"
        }">${$("#plus-minus-btn").checked ? "" : "-"}${
        expenditureList[expenditureList.length - 1].price
      }원</span>
        <button title="삭제하기" class="delete-btn">
            <img src="./src/images/delete-x.svg" alt="삭제">
            <span class="delete-text">삭제하기</span>
        </button>
    </div>
  </li>
    `
    );
  } else {
    const incomeList = sameDayArray.filter((el) => el.type === true);
    ListDetailBox.insertAdjacentHTML(
      "beforeend",
      `
    <li>
    <div class="list-detail">
        <div class="list-detail-category">
            <span>${incomeList[incomeList.length - 1].category}</span>
        </div>
        <span class="list-detail-body ">${
          incomeList[incomeList.length - 1].memo
        }</span>
        <span class="list-detail-payment list-detail-item">${
          incomeList[incomeList.length - 1].payment
        }</span>
        <span class="list-detail-price list-detail-item style="color:${
          $("#plus-minus-btn").checked ? "blue" : "red"
        }">${$("#plus-minus-btn").checked ? "" : "-"}${
        incomeList[incomeList.length - 1].price
      }원</span>
        <button title="삭제하기" class="delete-btn">
            <img src="./src/images/delete-x.svg" alt="삭제">
            <span class="delete-text">삭제하기</span>
        </button>
    </div>
  </li>
    `
    );
  }

};
