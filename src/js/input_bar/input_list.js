const dropdownMenu = {
  expenseCategories: [
    "생활",
    "식비",
    "교통",
    "쇼핑/뷰티",
    "의료/건강",
    "문화/여가",
    "미분류",
  ],
  incomeCategories: ["월급", "용돈", "기타수입"],
  paymentMethods: ["현찰", "체크카드", "신용카드"],
  income: "수입",
  paymentInputField: document.getElementById("payment_input"),
  paymentDropdownMenu: document.getElementById("payment_div"),
  categoryInputField: document.getElementById("category_input"),
  categoryDropdownMenu: document.getElementById("category_div"),

  showDropdownMenu(menu) {
    menu.style.display = "block";
  },

  hideDropdownMenu(menu) {
    menu.style.display = "none";
  },

  clearDropdownMenu(menu) {
    menu.textContent = "";
  },

  clearDropdowninputField(inputField) {
    inputField.textContent = "";
  },

  addItem(item, newDropdown) {
    const itemDiv = document.createElement("div");
    const itemText = document.createTextNode(item);
    itemDiv.appendChild(itemText);
    newDropdown.appendChild(itemDiv);
  },

  addPaymentDropdownMenu() {
    const isMinus =
      document.getElementById("change_button").getAttribute("isMinus") ===
      "true";
    const newDropdown = document.createElement("div");
    if (isMinus) {
      this.paymentMethods.forEach((payment) => {
        this.addItem(payment, newDropdown);
      });
    } else {
      this.addItem(this.income, newDropdown);
    }
    this.paymentDropdownMenu.appendChild(newDropdown);
  },

  addCategoryDropdownMenu() {
    const isMinus =
      document.getElementById("change_button").getAttribute("isMinus") ===
      "true";
    const newDropdown = document.createElement("div");
    if (isMinus) {
      this.expenseCategories.forEach((category) => {
        this.addItem(category, newDropdown);
      });
    } else {
      this.incomeCategories.forEach((category) => {
        this.addItem(category, newDropdown);
      });
    }
    this.categoryDropdownMenu.appendChild(newDropdown);
  },

  showPaymentDropdownMenu() {
    this.clearDropdownMenu(this.paymentDropdownMenu);
    this.addPaymentDropdownMenu();
    this.showDropdownMenu(this.paymentDropdownMenu);
  },

  showCategoryDropdownMenu() {
    this.clearDropdownMenu(this.categoryDropdownMenu);
    this.addCategoryDropdownMenu();
    this.showDropdownMenu(this.categoryDropdownMenu);
  },

  handlePaymentDropdownMenuClick() {
    this.paymentDropdownMenu.addEventListener("click", (e) => {
      this.paymentInputField.value = "";
      this.paymentInputField.value = e.target.textContent;
    });
  },

  handleCategoryDropdownMenuClick() {
    this.categoryDropdownMenu.addEventListener("click", (e) => {
      this.categoryInputField.value = "";
      this.categoryInputField.value = e.target.textContent;
    });
  },
};

document.addEventListener("click", (e) => {
  const isPaymentInputField = e.target === dropdownMenu.paymentInputField;
  if (isPaymentInputField) {
    dropdownMenu.showPaymentDropdownMenu();
    dropdownMenu.handlePaymentDropdownMenuClick();
  } else {
    dropdownMenu.hideDropdownMenu(dropdownMenu.paymentDropdownMenu);
  }
});

document.addEventListener("click", (e) => {
  const isCategoryInputField = e.target === dropdownMenu.categoryInputField;
  if (isCategoryInputField) {
    dropdownMenu.showCategoryDropdownMenu();
    dropdownMenu.handleCategoryDropdownMenuClick();
  } else {
    dropdownMenu.hideDropdownMenu(dropdownMenu.categoryDropdownMenu);
  }
});
