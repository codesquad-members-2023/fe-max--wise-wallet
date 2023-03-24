import { common } from "./input_bar_common.js";

const setActivate = () => {
  common.checkButton.setAttribute("src", "./src/svg/activate_check.svg");
  common.checkButton.setAttribute("condition", "activate");
};

const setDisabled = () => {
  common.checkButton.setAttribute("src", "./src/svg/disabled_check.svg");
  common.checkButton.setAttribute("condition", "disabled");
};

function isAllActivate() {
  let activateCount = 0;

  common.inputBarInput.forEach((input) => {
    const isfilled = input.value.length > 0;
    if (isfilled) {
      activateCount += 1;
    } else {
      activateCount;
    }
  });
  return activateCount;
}

common.inputBarInput.forEach((element) =>
  element.addEventListener("input", () => {
    const isActivate = isAllActivate() === 5;
    if (isActivate) {
      setActivate();
    } else {
      setDisabled();
    }
  })
);

common.inputBar.addEventListener("click", () => {
  const isActivate = isAllActivate() === 5;
  if (isActivate) {
    setActivate();
  } else {
    setDisabled();
  }
});
