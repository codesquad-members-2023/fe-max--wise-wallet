const changeBtn = document.getElementById("change_btn");
const changeImg = document.getElementById("change_button");

changeBtn.addEventListener("click", (e) => {
  const currentSrc = changeImg.getAttribute("src");
  if (currentSrc === "/src/svg/minus.svg") {
    changeImg.setAttribute("src", "/src/svg/plus.svg");
    changeImg.setAttribute("isMinus", "false");
  } else {
    changeImg.setAttribute("src", "/src/svg/minus.svg");
    changeImg.setAttribute("isMinus", "true");
  }
  console.log(changeImg.getAttribute("isMinus"))
});

const priceInput = document.getElementById("price_input");

priceInput.addEventListener("keyup", (e) => {
  const price = e.target.value.replace(/[^0-9]/g, '');

  if (e.target.value === '') {
    e.target.value = 0;
  } else {
    e.target.value = parseInt(price).toLocaleString('ko-KR');
  }
})
