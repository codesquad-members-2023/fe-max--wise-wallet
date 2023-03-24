export const generateListDetail = (addedList) => {
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
};
