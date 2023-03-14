import { $, $All } from "../../utils/dom.js";

export const tabsEventHandler = () => {
  const tabButtons = $All(".tab-button");
  const tabContents = $All(".tab-content");
  const buttonPaths = $All(".tab-button path");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      tabContents.forEach((tab) => {
        tab.classList.remove("active");
      });

      tabContents[index].classList.add("active");

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
};
