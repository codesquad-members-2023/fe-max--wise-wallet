import { $, $All } from "./js/utils/dom.js";
import { initInputBarDate } from "./js/init/initInputBarDate.js";
import { initDateDisplay } from "./js/init/initDateDisplay.js";
import { initEventHandler } from "./js/init/initEventHandler.js";
import { initListTotalInfo } from "./js/init/initListTotalInfo.js";
import { initList } from "./js/init/initList.js";

/* 파일분리 생각해두기 */

/* 통계탭 열기 */
const chartBoard = document.querySelector(".chart-board");
// 각 카테고리 항목으로 변경해야함
const chartHidden = document.querySelectorAll(".hidden_area");

// chartBoard와 chartHidden영역이 아닌곳을 클릭하면 다시 닫기로..?
chartBoard.addEventListener("click", function () {
  chartHidden.forEach((element) => {
    element.classList.remove("hidden");
  });
});

/* 셀렉트박스 변경 파일 분리하면 왜 null로 보이는지 생각하기..*/
const plusMinusBtn = document.querySelector("#plus-minus-btn");
const incomeMember = document.querySelector(".category-income-member");
const expenditureMember = document.querySelector(".category-list-member");
/* 셀렉트박스리스트*/
const categorySelectHead = document.querySelector(".category-select-head");
const categorySelect = document.querySelector(".category-select");

categorySelectHead.addEventListener("click", () => {
  categorySelectHead.classList.add("on");
  if (plusMinusBtn.checked) {
    categorySelect.replaceChild(incomeMember, expenditureMember);
  } else {
    categorySelect.replaceChild(expenditureMember, incomeMember);
  }
});

expenditureMember.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    categorySelectHead.innerText = event.target.innerText;
    categorySelectHead.classList.remove("on");
  }
});
incomeMember.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    categorySelectHead.innerText = event.target.innerText;
    categorySelectHead.classList.remove("on");
  }
});
/* 결제수단 추가 */

/* 모달창 - 추가구현 파트로 넘어가서 보류 */
// const addPaymentBtn = document.querySelector(".add-payment-btn");
// const modal = document.querySelector(".modal-bg");
// const cancelBtn = document.querySelector(".cancel-btn");

// addPaymentBtn.addEventListener("click", function () {
//   // $("#modal-input").classList.remove("delete");
//   // $("#modal-input").disabled = false;
//   // $("#modal-input").required = true;
//   modal.classList.remove("hidden");
// });
// cancelBtn.addEventListener("click", function () {
//   modal.classList.add("hidden");
// });

// const addModalInput = document.querySelector("#modal-input");
// const confirmAddBtn = document.querySelector(".confirm-btn");
// const addPaymentLi = document.querySelector(".add-payment");
// let isConfirmed = 0;

// confirmAddBtn.addEventListener("click", function () {
//   if (addModalInput.value === "") {
//     return;
//   }
//   if ($("#modal-input").disabled) {
//     isConfirmed = 1;
//   }
//   if (addModalInput.value !== "" && !isConfirmed) {
//     addPaymentLi.insertAdjacentHTML(
//       "beforebegin",
//       `<li>
//       <button type="button" class="select-items">
//         <span>${addModalInput.value}</span>
//         <img src="../src/images/delete-x.svg" alt="삭제">
//       </button>
//     </li>
//     `
//     );
//     modal.classList.add("hidden");
//   }
//   addModalInput.value = "";
// });


const init = () => {
  initInputBarDate();
  initDateDisplay();
  initEventHandler();
  initListTotalInfo();
  initList()
};

init()

