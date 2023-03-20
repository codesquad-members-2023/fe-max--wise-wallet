import { $ } from "./dom.js";
import { inputStore } from "../store/inputStore.js";
import { DAY_NAME } from "../constants/DAY_NAME.js";
import { getDay } from "./getDay.js";
import { generateListBody } from "./generateListBody.js";
import { generateListDetail } from "./generateListDetail.js";
import { getLocalStorage } from "../store/getLocalStorage.js";


export const renderListByDay = (storedValue) => {
  getLocalStorage(storedValue.key[뭐])
  const listArray = inputStore.listArray;

  // 해당 월의 수입 지출 현황
  if ($("#income-btn").checked) {

  }
  if ($("#expenditure-btn").checked) {
    // 총 건수 변화하는 함수
    console.log(listArray.length)
    console.log(
      listArray.filter(el => el.date.slice(-2) === $('#date-input').value.slice(-2))
    )
    if (listArray.length === 1) {
      generateListBody();
      generateListDetail();
      // document.querySelector(".list-by-day-box").innerHTML = `
      //   <li class="list-by-day">
      //     <div class="list-body">
      //       <div class="list-body-info">
      //         <div class="date-day">
      //           <span class="date-day-date">2월 10일</span>
      //           <span class="date-day-day">금</span>
      //         </div>
      //         <div class="income-expenditure">
      //           <span>수입</span>
      //           <span>2,010,580원</span>
      //           <span>지출</span>
      //           <span>9,500원</span>
      //         </div>
      //       </div>
      //       <ul class="list-datail-box">
      //       </ul>
      //     </div>
      //   </li>
      // `;
      // document.querySelector(".list-datail-box").insertAdjacentHTML(
      //   "beforeend",
      //   `
      //     <li>
      //       <div class="list-detail">
      //           <div class="list-detail-category">
      //               <span>${
      //                 listArray[listArray.length - 1].categoryIn
      //               }</span>
      //           </div>
      //           <span class="list-detail-body ">${
      //             listArray[listArray.length - 1].memo
      //           }</span>
      //           <span class="list-detail-payment list-detail-item">${
      //             listArray[listArray.length - 1].paymentIn
      //           }</span>
      //           <span class="list-detail-price list-detail-item">-${
      //             listArray[listArray.length - 1].price
      //           }원</span>
      //           <button title="삭제하기" class="delete-btn">
      //               <img src="./src/images/delete-x.svg" alt="삭제">
      //               <span class="delete-text">삭제하기</span>
      //           </button>
      //       </div>
      //     </li>
      //   `
      // );
    } else if (
      listArray.length > 1 &&
      listArray.filter(el => el.date.slice(-2) === $('#date-input').value.slice(-2)).length === 1
    ) {
      generateListBody();
      generateListDetail();
      // document.querySelector(".list-by-day-box").innerHTML = `
      //   <li class="list-by-day">
      //     <div class="list-body">
      //       <div class="list-body-info">
      //         <div class="date-day">
      //           <span class="date-day-date">2월 10일</span>
      //           <span class="date-day-day">금</span>
      //         </div>
      //         <div class="income-expenditure">
      //           <span>수입</span>
      //           <span>2,010,580원</span>
      //           <span>지출</span>
      //           <span>9,500원</span>
      //         </div>
      //       </div>
      //       <ul class="list-datail-box">
      //       </ul>
      //     </div>
      //   </li>
      //   `;
      // document.querySelector(".list-datail-box").insertAdjacentHTML(
      //   "beforeend",
      //   `
      //     <li>
      //       <div class="list-detail">
      //           <div class="list-detail-category">
      //               <span>${
      //                 listArray[listArray.length - 1].categoryIn
      //               }</span>
      //           </div>
      //           <span class="list-detail-body ">${
      //             listArray[listArray.length - 1].memo
      //           }</span>
      //           <span class="list-detail-payment list-detail-item">${
      //             listArray[listArray.length - 1].paymentIn
      //           }</span>
      //           <span class="list-detail-price list-detail-item">-${
      //             listArray[listArray.length - 1].price
      //           }원</span>
      //           <button title="삭제하기" class="delete-btn">
      //               <img src="./src/images/delete-x.svg" alt="삭제">
      //               <span class="delete-text">삭제하기</span>
      //           </button>
      //       </div>
      //     </li>
      //   `
      // );
    } else {
      generateListDetail();
      // document.querySelector(".list-datail-box").insertAdjacentHTML(
      //   "beforeend",
      //   `
      //     <li>
      //       <div class="list-detail">
      //           <div class="list-detail-category">
      //               <span>${
      //                 listArray[listArray.length - 1].categoryIn
      //               }</span>
      //           </div>
      //           <span class="list-detail-body ">${
      //             listArray[listArray.length - 1].memo
      //           }</span>
      //           <span class="list-detail-payment list-detail-item">${
      //             listArray[listArray.length - 1].paymentIn
      //           }</span>
      //           <span class="list-detail-price list-detail-item">-${
      //             listArray[listArray.length - 1].price
      //           }원</span>
      //           <button title="삭제하기" class="delete-btn">
      //               <img src="./src/images/delete-x.svg" alt="삭제">
      //               <span class="delete-text">삭제하기</span>
      //           </button>
      //       </div>
      //     </li>
      //   `
      // );
    }

    //         지금 상태에서 4번줄 하단에 console.dir(btn)해보세요. undefined 나온다면

    // js에서 query select가 html element보다 상단에 위치하게되면 선택이 되지 않습니다.

    // 스크립트를 html 아래로 위치시키시면 됩니다.

    // https://oniondev.tistory.com/17
  }
};
