import { $, $All } from "./js/utils/dom.js";
import { initInputBarDate } from "./js/init/initInputBarDate.js";
import { initDateDisplay } from "./js/init/initDateDisplay.js";
import { initEventHandler } from "./js/init/initEventHandler.js";
import { inputStore } from "./js/store/inputStore.js";
import { initListTotalLength } from "./js/init/initListTotalLength.js";
import { initList } from "./js/init/initList.js";
import { initTotalIncomeExpenditure } from "./js/init/initTotalIncomeExpenditure.js";

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

/* 셀렉트박스 변경*/
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
  initListTotalLength();
  initTotalIncomeExpenditure();
  // initList()
};

document.addEventListener("DOMContentLoaded", init);



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

한거
0313
x플러스 마이너스에 따라 셀렉트 박스 구성 바꾸기,
x 월 이동 가능하게,
  - 월 양옆으로 이동하면 input도 바뀌어야함
x 숫자만 입력되도록,
[보류] 취소 모달창 구현 - 스타일만 바꾸는 쪽으로 하려했는데.. 추가구현사항으로 분리됨,
x 파일 분리 참고(쿤디) - 1차 구조 변경 완료, 2차 js기능별로 나누기

한거
0314
x 인풋바 내용을 전부 입력하면 확인버튼 활성화, 
x 리스트로 등록가능하게 저장

한거
0315
x 파일정리

해야하는거
0316
x 수입 지출 총 합계 렌더링
x 셀렉트 박스 이외 부분 클릭시 닫히도록
리스트 렌더링
정규표현식 손보기
리스트에 삭제하기 이외 부분을 누르면 인풋바가 해당 내용들로 채워지면서 수정 기능 발생
수입/지출 필터링에 따른 목록 랜더링
날짜 넘버로 바꾸기고려(정규식으로 eE랑 +- 막아야함)
체인지:input값 변경 감시/뮤테이션 옵저버..?(어려워보임)
밸리데이터 호출<값이 유효한지 체크 


* 레이아웃
호버 옵션(기획서 다시 읽기),
확대하면 영어로 써진 달이 감춰짐->홛대되면서 메인이 밀려올라와 짜부된것처럼 보임?
축소시 메인리스트 카테고리영역이 삐져나옴(min 혹은 max위드 관련인듯..?)
메인리스트 카테고리 영역도 탭으로 선택이 돼야함
바닥 여백은 얼마나?

*/


