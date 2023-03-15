import { $ } from "../../utils/dom.js";

export const clickCategoryHead = () => {
  const plusMinusBtn = document.querySelector("#plus-minus-btn");
  const incomeMember = document.querySelector(".category-income-member");
  const expenditureMember = document.querySelector(".category-list-member");

  const categorySelectHead = document.querySelector(".category-select-head");

  const categorySelect = document.querySelector(".category-select");

  console.log(incomeMember.nodeType);
  console.log(expenditureMember.nodeType);
  console.log(categorySelectHead.nodeType);
  console.log(categorySelect.nodeType);

  categorySelectHead.classList.add("on");
  if (plusMinusBtn.checked) {
    categorySelect.replaceChild(incomeMember, expenditureMember);
  } else {
    categorySelect.replaceChild(expenditureMember, incomeMember);
  }
};
