const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabContents.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });

    tabButtons[index].classList.add("active");
    tabContents[index].classList.add("active");
  });
});

const chartBoard = document.querySelector(".chart-board");
// 각 카테고리 항목으로 변경해야함
const chartHidden = document.querySelectorAll(".hidden_area");

// chartBoard와 chartHidden영역이 아닌곳을 클릭하면 다시 닫기?
chartBoard.addEventListener("click", function(){
  chartHidden.forEach(element => {
    element.classList.remove("hidden")
  });
})


