import { common } from "./input_bar_common.js";
import { resetInputBar } from "./input_price.js";

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

common.checkButton.addEventListener("click", function () {
  const isActivate = isAllActivate() === 5;
  if (isActivate) {
    const history = {
      isExpense: common.changeImage.getAttribute("isExpense"),
      date: common.date.value,
      price: common.price.value,
      memo: common.memo.value,
      payment: common.payment.value,
      category: common.category.value,
    };

    let histories = JSON.parse(localStorage.getItem("histories")) || [];

    histories.push(history);
    localStorage.setItem("histories", JSON.stringify(histories));
  }

  resetInputBar();
});

// const histories = JSON.parse(localStorage.getItem("histories")) || [];

// histories.forEach(function (history) {
  
// });
