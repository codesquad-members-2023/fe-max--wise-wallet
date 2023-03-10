const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const buttonPaths = document.querySelectorAll(".tab-button path");

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", function (event) {
    tabContents.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });

    tabButtons[index].classList.add("active");
    tabContents[index].classList.add("active");

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

