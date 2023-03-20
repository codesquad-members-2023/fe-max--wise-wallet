import { $ } from "./dom.js";
import { inputStore } from "../store/inputStore.js";

export const generateListDetail = () => {
  const listArray = inputStore.listArray;
  const allListDetailBox = document.querySelectorAll(".list-datail-box");
    // console.log(allListDetailBox)
  const displayedMonthArray = inputStore.listArray.filter(
    (el) =>
      el.date.slice(4, 6) ===
      $(".header-month").textContent.toString().padStart(2, "0")
  );
  if ($("#income-btn").checked) {
  }
  if ($("#expenditure-btn").checked) {
    const expenditureArray = displayedMonthArray.filter(
      (el) => el.type === false
    );
    const dayIndex = expenditureArray.filter(el => el.date.slice(-2) === $("#date-input").value.slice(-2))
    
    // 해당날짜 리스트의 마지막
    //   allListDetailBox[dayIndex.length-1].insertAdjacentHTML()
    
    console.log(dayIndex)
    console.log(dayIndex.length-1)
    console.log(allListDetailBox)
    console.log(allListDetailBox[dayIndex.length-1])

    if(allListDetailBox.length === 1){
        allListDetailBox[0].insertAdjacentHTML(
            "beforeend",
            `
                <li>
                  <div class="list-detail">
                      <div class="list-detail-category">
                          <span>${listArray[listArray.length - 1].category}</span>
                      </div>
                      <span class="list-detail-body ">${
                        listArray[listArray.length - 1].memo
                      }</span>
                      <span class="list-detail-payment list-detail-item">${
                        listArray[listArray.length - 1].payment
                      }</span>
                      <span class="list-detail-price list-detail-item">-${
                        listArray[listArray.length - 1].price
                      }원</span>
                      <button title="삭제하기" class="delete-btn">
                          <img src="./src/images/delete-x.svg" alt="삭제">
                          <span class="delete-text">삭제하기</span>
                      </button>
                  </div>
                </li>
              `
          );
    } else{
        allListDetailBox[dayIndex.length-1].insertAdjacentHTML(
            "beforeend",
            `
                <li>
                  <div class="list-detail">
                      <div class="list-detail-category">
                          <span>${listArray[listArray.length - 1].category}</span>
                      </div>
                      <span class="list-detail-body ">${
                        listArray[listArray.length - 1].memo
                      }</span>
                      <span class="list-detail-payment list-detail-item">${
                        listArray[listArray.length - 1].payment
                      }</span>
                      <span class="list-detail-price list-detail-item">-${
                        listArray[listArray.length - 1].price
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
    
    // allListDetailBox[0].insertAdjacentHTML(
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



    // document.querySelector(".list-datail-box").insertAdjacentHTML(
    //   "beforeend",
    //   `
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
    // );
  }
};
