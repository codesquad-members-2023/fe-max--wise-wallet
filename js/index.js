const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

/* 파일분리 생각해두기 */

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

const buttonPaths = document.querySelectorAll(".tab-button path");

console.log(tabButtons)
console.log(tabContents)

tabButtons.forEach((button, index) => {
  //탭버튼 모음 buttons = [button,button,button] 
  // querySelectorAll = ".tab-button" 이 선택자(#이면 아이디, . 클래스) 를 가진 모든 요소의 배열[]
  // querySelector = ".tab-button"을 가진 모든 요소의 첫번째 = buttons[0]

  button.addEventListener("click", function (event) {
    //button하나 클릭시
    tabContents.forEach((tab) => {
      //탭 영역 모음 tabContents = [tab,tab,tab]
      tab.classList.remove("active");
      //모든 탭의 .acitve를 떼어줌(기본속성으로 세팅된 display: none으로 인해 감춰짐)
    });

    tabContents[index].classList.add("active");
     //해당 탭에(=[index]) .acitve를 붙여주어 영역 보여주기(display: block or flex 등 none이아니면 됨)

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