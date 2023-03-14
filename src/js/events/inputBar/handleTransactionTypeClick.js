import { SOURCE } from "../../constants/SOURCE.js";
import { inputBarStore } from "../../store/inputBarStore.js";
import { expenditureTemplate } from "../../views/category/expenditure.js";
import { incomeTemplate } from "../../views/category/income.js";

export const handleTransactionTypeClick = ({ target }) => {
  inputBarStore.toggleTransactionType();
  initCategory();
  toggleIconSource(target);
  reRenderCategoryList();
};

const toggleIconSource = (target) => {
  if (inputBarStore.isTransactionExpenditure()) {
    target.src = SOURCE.MINUS_ICON;

    return;
  }

  target.src = SOURCE.PLUS_ICON;
};

const initCategory = () => {
  const $categoryText = document.querySelector(".input-bar__category-text");

  $categoryText.textContent = "선택하세요";
  inputBarStore.setCategory("");
};

const reRenderCategoryList = () => {
  const $ul = document.querySelector(".category-dropdown__ul");

  if (inputBarStore.isTransactionExpenditure()) {
    $ul.innerHTML = expenditureTemplate;

    return;
  }

  $ul.innerHTML = incomeTemplate;
};
