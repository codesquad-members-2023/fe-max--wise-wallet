import { inputBarStore } from "../../store/inputBarStore.js";
import { hideElement } from "../../utils/hideElement.js";

export const handleCategoryListClick = ({ target, currentTarget }) => {
  if (target.tagName === "UL") return;

  const $categoryText = document.querySelector(".input-bar__category-text");

  $categoryText.textContent = target.textContent;
  inputBarStore.setCategory(target.dataset.category);
  hideElement(currentTarget);
};
