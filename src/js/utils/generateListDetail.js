import { inputStore } from "../store/inputStore.js";

export const generateListDetail = () => {
  const listArray = inputStore.listArray
  document.querySelector(".list-datail-box").insertAdjacentHTML(
    "beforeend",
    `
          <li>
            <div class="list-detail">
                <div class="list-detail-category">
                    <span>${listArray[listArray.length-1].categoryIn}</span>
                </div>
                <span class="list-detail-body ">${listArray[listArray.length-1].memo}</span>
                <span class="list-detail-payment list-detail-item">${listArray[listArray.length-1].paymentIn}</span>
                <span class="list-detail-price list-detail-item">-${listArray[listArray.length-1].price}원</span>
                <button title="삭제하기" class="delete-btn">
                    <img src="./src/images/delete-x.svg" alt="삭제">
                    <span class="delete-text">삭제하기</span>
                </button>
            </div>
          </li>
        `
  );
};
