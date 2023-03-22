const inputBar = document.querySelector(".input_bar");
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
    const isfilled = input.value.length > 0;
    if (isfilled) {
      activateCount += 1;
    } else {
      activateCount;
    }
  });
  return activateCount;
}

inputBarInput.forEach((element) =>
  element.addEventListener("input", () => {
    const isActivate = isAllActivate() === 5;
    if (isActivate) {
      setActivate();
    } else {
      setDisabled();
    }
  })
);

inputBar.addEventListener("click", (e) => {
  const isActivate = isAllActivate() === 5;
  if (isActivate) {
    setActivate();
  } else {
    setDisabled();
  }
});
