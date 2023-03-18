const price = {
  changeBtn :document.getElementById("change_btn"),
  changeImg :document.getElementById("change_button"),
  priceInput : document.getElementById("price_input")
}

price.changeBtn.addEventListener("click", (e) => {
  const currentSrc = price.changeImg.getAttribute("src");
  if (currentSrc === "./src/svg/minus.svg") {
    price.changeImg.setAttribute("src", "./src/svg/plus.svg");
    price.changeImg.setAttribute("isMinus", "false");
  } else {
    price.changeImg.setAttribute("src", "./src/svg/minus.svg");
    price.changeImg.setAttribute("isMinus", "true");
  }
});

price.priceInput.addEventListener("keyup", (e) => {
  const price = e.target.value.replace(/[^0-9]/g, '');

  if (e.target.value === '') {
    e.target.value = 0;
  } else {
    e.target.value = parseInt(price).toLocaleString('ko-KR');
  }
})
