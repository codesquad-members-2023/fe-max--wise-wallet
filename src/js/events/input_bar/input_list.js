const select = {
  minusCategories : ['생활', '식비', '교통', '쇼핑/뷰티', '의료/건강', '문화/여가', '미분류'],
  plusCategories : ['월급', '용돈', '기타수입'],
  paymentInput : document.getElementById("payment_input"),
  paymentDiv: document.getElementById("payment_div"),
  categoryInput: document.getElementById("category_input"),
  categoryDiv: document.getElementById("category_div"),

  showList(list) {
    list.style.display = "block";
  },

  hideList(list) {
    list.style.display = "none";
  },

  addList(value, newDiv) {
    const textDiv = document.createElement("div");
    const textNode = document.createTextNode(value);
    textDiv.appendChild(textNode);
    newDiv.appendChild(textDiv);
  },

  addCategory(condition) {
    condition = document.getElementById("change_button").getAttribute("isMinus");
    const newDiv = document.createElement("div");
    if (condition === "true") {
      this.minusCategories.forEach((value) => {
        this.addList(value, newDiv);
      });
     } else {
      this.plusCategories.forEach((value) => {
        this.addList(value, newDiv);
      });
    }
    this.categoryDiv.appendChild(newDiv);
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
    select.categoryDiv.innerHTML = "";
    select.addCategory();
    select.showList(select.categoryDiv);
  } else {
    select.hideList(select.categoryDiv);
  }
});
