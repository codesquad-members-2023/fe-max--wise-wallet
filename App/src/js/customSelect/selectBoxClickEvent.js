import { selectOption } from "./selectOption.js";

const toggleSelectBox = (selectBox) => {
  selectBox.classList.toggle("active");
};

export const selectBoxClickEvent = (selectBoxElement) => {
  selectBoxElement.addEventListener("click", function (e) {
    const $targetElement = e.target;
    const isOptionElement = $targetElement.classList.contains("option");
    if (isOptionElement) {
      selectOption($targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
};
