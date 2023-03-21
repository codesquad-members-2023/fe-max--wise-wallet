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

  // const listArray = inputStore.listArray;
  // const allListDetailBox = document.querySelectorAll(".list-datail-box");
  // // console.log(allListDetailBox)
  // const displayedMonthArray = inputStore.listArray.filter(
  //   (el) =>
  //     el.date.slice(4, 6) ===
  //     $(".header-month").textContent.toString().padStart(2, "0")
  // );
  // if ($("#income-btn").checked) {
  // }
  // if ($("#expenditure-btn").checked) {
  //   const expenditureArray = displayedMonthArray.filter(
  //     (el) => el.type === false
  //   );
  //   const dayIndex = expenditureArray.filter(
  //     (el) => el.date.slice(-2) === $("#date-input").value.slice(-2)
  //   );

  //   // 해당날짜 리스트의 마지막
  //   //   allListDetailBox[dayIndex.length-1].insertAdjacentHTML()

  //   console.log(dayIndex);
  //   console.log(dayIndex.length - 1);
  //   console.log(allListDetailBox);
  //   console.log(allListDetailBox[dayIndex.length - 1]);

  //   if (allListDetailBox.length === 1) {
  //     allListDetailBox[0].insertAdjacentHTML(
  //       "beforeend",
  //       `
  //             <li>
  //               <div class="list-detail">
  //                   <div class="list-detail-category">
  //                       <span>${listArray[listArray.length - 1].category}</span>
  //                   </div>
  //                   <span class="list-detail-body ">${
  //                     listArray[listArray.length - 1].memo
  //                   }</span>
  //                   <span class="list-detail-payment list-detail-item">${
  //                     listArray[listArray.length - 1].payment
  //                   }</span>
  //                   <span class="list-detail-price list-detail-item">-${
  //                     listArray[listArray.length - 1].price
  //                   }원</span>
  //                   <button title="삭제하기" class="delete-btn">
  //                       <img src="./src/images/delete-x.svg" alt="삭제">
  //                       <span class="delete-text">삭제하기</span>
  //                   </button>
  //               </div>
  //             </li>
  //           `
  //     );
  //   } else {
  //     allListDetailBox[dayIndex.length - 1].insertAdjacentHTML(
  //       "beforeend",
  //       `
  //             <li>
  //               <div class="list-detail">
  //                   <div class="list-detail-category">
  //                       <span>${listArray[listArray.length - 1].category}</span>
  //                   </div>
  //                   <span class="list-detail-body ">${
  //                     listArray[listArray.length - 1].memo
  //                   }</span>
  //                   <span class="list-detail-payment list-detail-item">${
  //                     listArray[listArray.length - 1].payment
  //                   }</span>
  //                   <span class="list-detail-price list-detail-item">-${
  //                     listArray[listArray.length - 1].price
  //                   }원</span>
  //                   <button title="삭제하기" class="delete-btn">
  //                       <img src="./src/images/delete-x.svg" alt="삭제">
  //                       <span class="delete-text">삭제하기</span>
  //                   </button>
  //               </div>
  //             </li>
  //           `
  //     );
  //   }

  //   allListDetailBox[0].insertAdjacentHTML(
  //     "beforeend",
  //     `
  //         <li>
  //           <div class="list-detail">
  //               <div class="list-detail-category">
  //                   <span>${listArray[listArray.length - 1].categoryIn}</span>
  //               </div>
  //               <span class="list-detail-body ">${
  //                 listArray[listArray.length - 1].memo
  //               }</span>
  //               <span class="list-detail-payment list-detail-item">${
  //                 listArray[listArray.length - 1].paymentIn
  //               }</span>
  //               <span class="list-detail-price list-detail-item">-${
  //                 listArray[listArray.length - 1].price
  //               }원</span>
  //               <button title="삭제하기" class="delete-btn">
  //                   <img src="./src/images/delete-x.svg" alt="삭제">
  //                   <span class="delete-text">삭제하기</span>
  //               </button>
  //           </div>
  //         </li>
  //       `
  //   );

  //   document.querySelector(".list-datail-box").insertAdjacentHTML(
  //     "beforeend",
  //     `
  //       <li>
  //         <div class="list-detail">
  //             <div class="list-detail-category">
  //                 <span>${listArray[listArray.length - 1].categoryIn}</span>
  //             </div>
  //             <span class="list-detail-body ">${
  //               listArray[listArray.length - 1].memo
  //             }</span>
  //             <span class="list-detail-payment list-detail-item">${
  //               listArray[listArray.length - 1].paymentIn
  //             }</span>
  //             <span class="list-detail-price list-detail-item">-${
  //               listArray[listArray.length - 1].price
  //             }원</span>
  //             <button title="삭제하기" class="delete-btn">
  //                 <img src="./src/images/delete-x.svg" alt="삭제">
  //                 <span class="delete-text">삭제하기</span>
  //             </button>
  //         </div>
  //       </li>
  //     `
  //   );
  // }
};
