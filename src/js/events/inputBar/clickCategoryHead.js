import { $ } from "../../utils/dom.js";

export const clickCategoryHead = () => {
  const plusMinusBtn =  $("#plus-minus-btn");
  const incomeMember =  $(".category-income-member");
  const expenditureMember =  $(".category-list-member");

  const categorySelectHead =  $(".category-select-head");
  const categorySelect =  $(".category-select");

  categorySelectHead.classList.add("on");
  if (plusMinusBtn.checked) {
    categorySelect.replaceChild(incomeMember, expenditureMember);
  } else {
    categorySelect.replaceChild(expenditureMember, incomeMember);
  }

};
