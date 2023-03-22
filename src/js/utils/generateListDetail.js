import { $ } from "./dom.js";

export const generateListDetail = (addedList) => {
  console.log(addedList.date);
  console.log(addedList);
  const ListDetailBox = document.querySelector(`.list-date-${addedList.date}`);

  ListDetailBox.insertAdjacentHTML(
    "afterbegin",
    `
  <li>
  <div class="list-detail">
      <div class="list-detail-category">
          <span>${addedList.category}</span>
      </div>
      <span class="list-detail-body ">${addedList.memo}</span>
      <span class="list-detail-payment list-detail-item">${
        addedList.payment
      }</span>
      <span class="list-detail-price list-detail-item" style="color: ${
        addedList.type ? "#4cb8b8;" : "#e75b3f;"
      }">${addedList.type ? "" : "-"}${addedList.price}원</span>
      <button title="삭제하기" class="delete-btn">
          <img src="./src/images/delete-x.svg" alt="삭제">
          <span class="delete-text">삭제하기</span>
      </button>
  </div>
</li>
  `
  );

  // if (!$("#plus-minus-btn").checked) {
  //   const expenditureList = sameDayArray.filter((el) => el.type === false);
  //   console.log(expenditureList);
  //   // 크리에이션 타임 순으로 정렬하기
  //   // 애초에 둘로 나뉘어져야하나? 생각해보기
  //   //  - type 삼항식으로 나누기
  //   // 붙여주는게 beforeend여야하는지 고려하기
  //   ListDetailBox.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <li>
  //   <div class="list-detail">
  //       <div class="list-detail-category">
  //           <span>${expenditureList[expenditureList.length - 1].category}</span>
  //       </div>
  //       <span class="list-detail-body ">${
  //         expenditureList[expenditureList.length - 1].memo
  //       }</span>
  //       <span class="list-detail-payment list-detail-item">${
  //         expenditureList[expenditureList.length - 1].payment
  //       }</span>
  //       <span class="list-detail-price list-detail-item" style="color: ${
  //         $("#plus-minus-btn").checked ? "blue" : "red"
  //       }">${$("#plus-minus-btn").checked ? "" : "-"}${
  //       expenditureList[expenditureList.length - 1].price
  //     }원</span>
  //       <button title="삭제하기" class="delete-btn">
  //           <img src="./src/images/delete-x.svg" alt="삭제">
  //           <span class="delete-text">삭제하기</span>
  //       </button>
  //   </div>
  // </li>
  //   `
  //   );
  // } else {
  //   const incomeList = sameDayArray.filter((el) => el.type === true);
  //   ListDetailBox.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <li>
  //   <div class="list-detail">
  //       <div class="list-detail-category">
  //           <span>${incomeList[incomeList.length - 1].category}</span>
  //       </div>
  //       <span class="list-detail-body ">${
  //         incomeList[incomeList.length - 1].memo
  //       }</span>
  //       <span class="list-detail-payment list-detail-item">${
  //         incomeList[incomeList.length - 1].payment
  //       }</span>
  //       <span class="list-detail-price list-detail-item style="color:${
  //         $("#plus-minus-btn").checked ? "blue" : "red"
  //       }">${$("#plus-minus-btn").checked ? "" : "-"}${
  //       incomeList[incomeList.length - 1].price
  //     }원</span>
  //       <button title="삭제하기" class="delete-btn">
  //           <img src="./src/images/delete-x.svg" alt="삭제">
  //           <span class="delete-text">삭제하기</span>
  //       </button>
  //   </div>
  // </li>
  //   `
  //   );
  // }
};
