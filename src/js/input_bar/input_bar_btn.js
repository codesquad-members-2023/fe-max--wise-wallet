const inputBarInput = document.querySelectorAll(".input_bar input");
const checkBtn = document.getElementById("check_btn");

const setActivate = () => {
  checkBtn.setAttribute("src", "./src/svg/activate_check.svg");
  checkBtn.setAttribute("condition", "activate");
};

const setDisabled = () => {
  checkBtn.setAttribute("src", "./src/svg/disabled_check.svg");
  checkBtn.setAttribute("condition", "disabled");
};

function isAllActivate() {
  let activateCount = 0;

  inputBarInput.forEach((input) => {
    if (input.value.length > 0) {
      activateCount += 1;
    } else {
      activateCount;
    }
  });
  return activateCount;
}

inputBarInput.forEach((element) =>
  element.addEventListener("input", () => {
    const isActavate = isAllActivate() === 5;
    if (isActavate) {
      setActivate();
    } else {
      setDisabled();
    }
  })
);

document.addEventListener("click", (e) => {
  const isActavate = isAllActivate() === 5;
  if (isActavate) {
    setActivate();
  } else {
    setDisabled();
  }
});
