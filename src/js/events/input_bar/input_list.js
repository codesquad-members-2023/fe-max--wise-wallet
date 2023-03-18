const select = {
  minusCategories : ['생활', '식비', '교통', '쇼핑/뷰티', '의료/건강', '문화/여가', '미분류'],
  plusCategories : ['월급', '용돈', '기타수입'],
  paymentlist: ['현찰', '체크카드', '신용카드'],
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

  addPayment() {
    const newPaymentDiv = document.createElement("div");
    this.paymentlist.forEach((value) => {
      const textPaymentDiv = document.createElement("div");
      const paymentTextNode = document.createTextNode(value);
      textPaymentDiv.appendChild(paymentTextNode);
      newPaymentDiv.appendChild(textPaymentDiv);
      textPaymentDiv.id = "payment_list";
    })
    this.paymentDiv.appendChild(newPaymentDiv);
  },

  addList(value, newDiv) {
    const textDiv = document.createElement("div");
    const textNode = document.createTextNode(value);
    textDiv.appendChild(textNode);
    newDiv.appendChild(textDiv);
    textDiv.id = "category_list";
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
    select.paymentDiv.innerHTML = "";
    select.addPayment();
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
