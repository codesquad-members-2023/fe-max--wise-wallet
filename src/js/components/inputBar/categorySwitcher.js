import { getCategories } from "../../constants/categories.js";
import { deactivateSelectBox, updateSelectBox } from "./dropdown.js";

const INITIAL_SELECT_BOX_CONTENT = "선택하세요";

const createItem = (category) => {
  const item = document.createElement("li");
  const content = document.createElement("div");
  const text = document.createElement("p");

  item.className = "dropdown-item";
  content.className = "dropdown-item__content";
  text.textContent = category;

  content.appendChild(text);
  item.appendChild(content);

  return item;
};

const createCategoryElements = (categories) => {
  const list = document.createElement("ul");
  categories.foreach((c) => {
    list.appendChild(createItem(c));
  });
  return list;
};

const switchCategory = (e) => {
  const categories = getCategories(e.currentTarget.checked);
  const dropdown = document.querySelector(".input-bar__item--category .dropdown");
  const categoryElements = createCategoryElements(categories);
  const originCategories = dropdown.firstElementChild;

  updateSelectBox(dropdown, INITIAL_SELECT_BOX_CONTENT);
  deactivateSelectBox(dropdown);

  dropdown.replaceChild(categoryElements, originCategories);
};

const initCategorySwitcher = () => {
  const switcher = document.querySelector("#sign-switcher");
  switcher.addEventListener("change", switchCategory);
};

export { initCategorySwitcher };
