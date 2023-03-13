import { $, $All } from "./js/utils/dom.js";
import { initInputBarDate } from "./js/init/initInputBarDate.js";
import { initDateDisplay } from "./js/init/initDateDisplay.js";
import { initEventHandler } from "./js/init/initEventHandler.js";


/* 파일분리 생각해두기 */

/* 탭이동, 버튼 색 변경 */

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

/* 셀렉트박스 변경*/
const plusMinusBtn = document.querySelector("#plus-minus-btn");
const incomeMember = document.querySelector(".income-member");

// plusMinusBtn.addEventListener("click", function () {
//   plusMinusBtn.checked
//     ? incomeMember.classList.add("active")
//     : incomeMember.classList.remove("active");
// });

/* 셀렉트박스리스트*/
const categorySelectHead = document.querySelector(".category-select-head");
const categoryListMember = document.querySelector(".category-list-member");
categorySelectHead.addEventListener("click", () => {
  categorySelectHead.classList.add("on");
});
categoryListMember.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    categorySelectHead.innerText = event.target.innerText;
    categorySelectHead.classList.remove("on");
  }
});

/* 결제수단 추가 */

/* 모달창 */
const addPaymentBtn = document.querySelector(".add-payment-btn");
const modal = document.querySelector(".modal-bg");
const cancelBtn = document.querySelector(".cancel-btn");

addPaymentBtn.addEventListener("click", function () {
  // $("#modal-input").classList.remove("delete");
  // $("#modal-input").disabled = false;
  // $("#modal-input").required = true;
  modal.classList.remove("hidden");
});
cancelBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

const addModalInput = document.querySelector("#modal-input");
const confirmAddBtn = document.querySelector(".confirm-btn");
const paymentLi = document.createElement("li");
const addPaymentLi = document.querySelector(".add-payment");
let isConfirmed = 0;

confirmAddBtn.addEventListener("click", function () {
  if (addModalInput.value === "") {
    return;
  }
  if ($("#modal-input").disabled) {
    isConfirmed = 1;
  }
  if (addModalInput.value !== "" && !isConfirmed) {
    addPaymentLi.insertAdjacentHTML(
      "beforebegin",
      `<li>
      <button type="button" class="select-items">
        <span>${addModalInput.value}</span>
        <img src="../src/images/delete-x.svg" alt="삭제">
      </button>
    </li>
    `
    );
    modal.classList.add("hidden");
  }
  addModalInput.value = "";
});

const paymentSelectHead = document.querySelector(".payment-select-head");
const paymentListMember = document.querySelector(".payment-list-member");
paymentSelectHead.addEventListener("click", () => {
  paymentSelectHead.classList.add("on");
});

paymentListMember.addEventListener("click", (event) => {
  console.log(event.target.classList);
  if (event.target.classList.contains("add-payment-btn")) {
    paymentSelectHead.innerText = "선택하세요";
    return;
  }
  if (event.target.nodeName === "BUTTON") {
    paymentSelectHead.innerText = event.target.innerText;
    paymentSelectHead.classList.remove("on");
  }
});

/* 결제수단 삭제 */
/* 버튼을 누르면- 모달창이 뜨고, 
모달창의 인풋 스타일이 바뀐다- css add,
인풋엔 해당버튼 옆 텍스트가 들어간다
disabled상태로 인풋을 락한다
확인 버튼을 누르면 해당 버튼의 li노드가 사라진다 */

// const deleteConfirmHandler = (e) => {
//   const deleteImg = e.target.closest("li");
//   console.log(deleteImg);
//   deleteImg.parentNode.removeChild(deleteImg);
// };

// const deletPaymentBtn = document.querySelectorAll(
//   ".payment-list-member li img"
// );
// console.log(deletPaymentBtn);
// deletPaymentBtn.forEach((element) => {
//   // console.log(element)
//   element.addEventListener("click", function (e) {
//     modal.classList.remove("hidden");
//     $("#modal-input").classList.add("delete");
//     // console.log(element.previousElementSibling.textContent)
//     $("#modal-input").value = element.previousElementSibling.textContent;
//     $("#modal-input").disabled = true;
//     $(".confirm-btn").classList.add("delete");
//     $(".confirm-btn").value = "삭제";
//     // console.log($(".payment-list-member li span").textContent);
//     if (isConfirmed === 1) {
//       deleteConfirmHandler(e);
//       modal.classList.add("hidden");
//       isConfirmed = 0;
//       $(".confirm-btn").classList.remove("delete");
//       $(".confirm-btn").value = "확인";
//     }
//   });
// });

/* 오늘날짜로 세팅 */
// const inputElement = document.querySelector("#date-input");
// const date = new Date();
// const year = date.getFullYear();
// const month = (date.getMonth() + 1).toString().padStart(2, "0");
// const day = date.getDate().toString().padStart(2, "0");
// const formattedDate = `${year}${month}${day}`;
// inputElement.value = formattedDate;

// /* 세자리마다 콤마 */
// const priceInput = document.querySelector("#price-input");
// priceInput.addEventListener("keyup", function (e) {
//   let value = e.target.value;
//   value = Number(value.replaceAll(",", ""));
//   if (isNaN(value)) {
//     //NaN인지 판별
//     priceInput.value = 0;
//   } else {
//     //NaN이 아닌 경우
//     const formatValue = value.toLocaleString("ko-KR");
//     priceInput.value = formatValue;
//   }
// });

// /* 월 변화 */
// const changeMonthHandler = (e) => {
//   // console.log(e.currentTarget)
//   if (e.currentTarget.classList.contains("previous-month-btn")) {
//     // console.log(e.currentTarget);
//   }
// };

// $All(".month-year-icon").forEach((element) => {
//   element.addEventListener("click", (e) => {
//     changeMonthHandler(e);
//   });
// });



const init = () => {
  initDateDisplay()
  initInputBarDate()
  initEventHandler()
}
document.addEventListener("DOMContentLoaded", init)



/* 
한거
0308
x 폼태그로 감싸지 않고 div로만 감싸져있던 인풋들을 전부 폼태그로 감싸줌
x 통계탭 영역 테두리 영역 잡기
x 통계탭 영역 상단 박스 누르면 아래 박스 보이게 임시로 해놓음 원래 각 카테고리를 눌러야 보여야하지만


한거
0309
x 폰트파일 가져오기, 
x 통계차트의 꺾은선 차트 부분제외 나머지 부분 채우기, 
x 클릭시 바뀌는 이미지,->아예 svg태그로?
x 체크박스 커스텀,
x 인풋 태그(모달창 내부 인풋 포함) 입력 텍스트를 위한 여백
x 메인리스트 카테고리 영역에 호버시 삭제하기 버튼
x 셀렉트박스 커스텀,
x 플러스 마이너스 이것도 체크박스로

한거
0310
x 탭메뉴 클릭시 아이콘 색 변경,
x 날짜 오늘날짜가 보이도록(선택한날짜로 20230309 가 되도록) 
x 추가하기 누르면 모달창이 뜨도록,
x 모달창에 입력한거 셀렉트 박스에 추가,
x 숫자 세자리마다 콤마

해야하는거
0313
플러스 마이너스에 따라 셀렉트 박스 구성 바꾸기,
월 이동 가능하게,
x 숫자만 입력되도록,
호버 옵션(기획서 다시 읽기),
[보류] 취소 모달창 구현 - 스타일만 바꾸는 쪽으로 하려했는데.. 추가구현사항으로 분리됨,
x 파일 분리 참고(쿤디) - 1차 구조 변경 완료, 2차 js기능별로 나누기

인풋바 내용을 전부 입력하면 리스트로 등록가능
리스트에 삭제하기 이외 부분을 누르면 인풋바가 해당 내용들로 채워지면서 수정 기능 발생
수입/지출 필터링에 따른 목록 랜더링
날짜 넘버로 바꾸기고려

캘린더 영역

* 레이아웃
확대하면 영어로 써진 달이 감춰짐->홛대되면서 메인이 밀려올라와 짜부된것처럼 보임?
축소시 메인리스트 카테고리영역이 삐져나옴(min 혹은 max위드 관련인듯..?)
메인리스트 카테고리 영역도 탭으로 선택이 돼야함
바닥 여백은 얼마나?
 */
