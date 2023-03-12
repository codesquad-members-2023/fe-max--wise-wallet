const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

/* 파일분리 생각해두기 */

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const buttonPaths = document.querySelectorAll(".tab-button path");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", function (event) {
    tabContents.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents[index].classList.add("active");

    /* 버튼 색상 */
    buttonPaths.forEach((path) => {
      path.setAttribute("stroke", "#A79FCB");
    });

    if (event.currentTarget === tabButtons[index]) {
      const paths = event.currentTarget.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("stroke", "#FCFCFC");
      });
    }
  });
});

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
  $("#modal-input").classList.remove("delete");
  $("#modal-input").disabled = false;
  $("#modal-input").required = true;
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
        <img src="../images/delete-x.svg" alt="삭제">
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
/* 버튼을 누르면 모달창이 뜨고, 
모달창의 인풋 스타일이 바뀐다,
인풋엔 해당버튼 옆 텍스트가 들어간다
disabled상태로 인풋을 락한다
확인 버튼을 누르면 해당 버튼의 li노드가 사라진다 */

const deleteConfirmHandler = (e) => {
  const deleteImg = e.target.closest("li");
  console.log(deleteImg);
  deleteImg.parentNode.removeChild(deleteImg);
};

const deletPaymentBtn = document.querySelectorAll(
  ".payment-list-member li img"
);
console.log(deletPaymentBtn);
deletPaymentBtn.forEach((element) => {
  // console.log(element)
  element.addEventListener("click", function (e) {
    modal.classList.remove("hidden");
    $("#modal-input").classList.add("delete");
    // console.log(element.previousElementSibling.textContent)
    $("#modal-input").value = element.previousElementSibling.textContent;
    $("#modal-input").disabled = true;
    $(".confirm-btn").classList.add("delete");
    $(".confirm-btn").value = "삭제";
    // console.log($(".payment-list-member li span").textContent);
    if (isConfirmed === 1) {
      deleteConfirmHandler(e);
      modal.classList.add("hidden");
      isConfirmed = 0;
      $(".confirm-btn").classList.remove("delete");
      $(".confirm-btn").value = "확인";
    }
  });
});

/* 오늘날짜로 세팅 */
const inputElement = document.querySelector("#date-input");
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const formattedDate = `${year}${month}${day}`;
inputElement.value = formattedDate;

/* 세자리마다 콤마 */
const priceInput = document.querySelector("#price-input");
priceInput.addEventListener("keyup", function (e) {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    //NaN인지 판별
    priceInput.value = 0;
  } else {
    //NaN이 아닌 경우
    const formatValue = value.toLocaleString("ko-KR");
    priceInput.value = formatValue;
  }
});

/* 월 변화 */
const changeMonthHandler = (e) => {
  // console.log(e.currentTarget)
  if(e.currentTarget.classList.contains("previous-month-btn")){
    
  }
};

$All(".month-year-icon").forEach(element => {
  element.addEventListener("click", (e)=>{
    changeMonthHandler(e)
  })
});