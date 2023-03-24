import { common } from "./input_bar_common.js";

function showDropdownMenu(menu) {
  menu.style.display = "block";
}

function hideDropdownMenu(menu) {
  menu.style.display = "none";
}

function clearDropdownMenu(menu) {
  menu.textContent = "";
}

function addItem(item, newDropdown) {
  const itemDiv = document.createElement("div");
  const itemText = document.createTextNode(item);
  itemDiv.appendChild(itemText);
  newDropdown.appendChild(itemDiv);
}

function addPaymentDropdownMenu() {
  const isExpense = common.changeImage.getAttribute("isExpense") === "true";
  const newDropdown = document.createElement("div");
  if (isExpense) {
    common.paymentMethods.forEach((payment) => {
      addItem(payment, newDropdown);
    });
  } else {
    addItem(common.income, newDropdown);
  }
  common.paymentDropdownMenu.appendChild(newDropdown);
}

function addCategoryDropdownMenu() {
  const isExpense = common.changeImage.getAttribute("isExpense") === "true";
  const newDropdown = document.createElement("div");
  if (isExpense) {
    common.expenseCategories.forEach((category) => {
      addItem(category, newDropdown);
    });
  } else {
    common.incomeCategories.forEach((category) => {
      addItem(category, newDropdown);
    });
  }
  common.categoryDropdownMenu.appendChild(newDropdown);
}

function addDropdownMenu(dropdownMenu, addmenu) {
  clearDropdownMenu(dropdownMenu);
  addmenu();
  showDropdownMenu(dropdownMenu);
}

function handleDropdownMenuClick(dropdown, inputField) {
  dropdown.addEventListener("click", (e) => {
    inputField.value = e.target.textContent;
  });
}

document.addEventListener("click", (e) => {
  const isPaymentInputField = e.target === common.payment;
  if (isPaymentInputField) {
    addDropdownMenu(common.paymentDropdownMenu, addPaymentDropdownMenu);
    handleDropdownMenuClick(common.paymentDropdownMenu, common.payment);
  } else {
    hideDropdownMenu(common.paymentDropdownMenu);
  }
});

document.addEventListener("click", (e) => {
  const isCategoryInputField = e.target === common.category;
  if (isCategoryInputField) {
    addDropdownMenu(common.categoryDropdownMenu, addCategoryDropdownMenu);
    handleDropdownMenuClick(common.categoryDropdownMenu, common.category);
  } else {
    hideDropdownMenu(common.categoryDropdownMenu);
  }
});
