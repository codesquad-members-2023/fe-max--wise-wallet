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



