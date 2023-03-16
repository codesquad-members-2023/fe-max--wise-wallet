const select = {
  paymentInput : document.getElementById("payment_input"),
  paymentDiv: document.getElementById("payment_div"),
  paymentList: document.getElementById("payment_list"),
  categoryInput: document.getElementById("category_input"),
  categoryDiv: document.getElementById("category_div"),
  categoryList: document.getElementById("category_list"),

  showList(list) {
    list.style.display = "block";
  },

  hideList(list) {
    list.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (e.target === select.paymentInput) {
    select.showList(select.paymentDiv);
  } else {
    select.hideList(select.paymentDiv);
  }
});

document.addEventListener("click", (e) => {
  if (e.target === select.categoryInput) {
    select.showList(select.categoryDiv);
  } else {
    select.hideList(select.categoryDiv);
  }
});
