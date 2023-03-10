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

// chartBoard와 chartHidden영역이 아닌곳을 클릭하면 다시 닫기?
chartBoard.addEventListener("click", function () {
  chartHidden.forEach((element) => {
    element.classList.remove("hidden");
  });
});

/* 셀렉트박스 */
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

const paymentSelectHead = document.querySelector(".payment-select-head");
const paymentListMember = document.querySelector(".payment-list-member");
paymentSelectHead.addEventListener("click", () => {
  paymentSelectHead.classList.add("on");
});
paymentListMember.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    paymentSelectHead.innerText = event.target.innerText;
    paymentSelectHead.classList.remove("on");
  }
});

/* 오늘날짜로 세팅 */
const inputElement = document.querySelector("#date-input");
const date = new Date(); // 날짜 객체 생성
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
