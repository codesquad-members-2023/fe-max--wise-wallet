const hideActiveDropdown = () => {
  const activeSelectBoxes = document.querySelectorAll(".select-box.active");
  const activeDropdowns = document.querySelectorAll(".dropdown.active");

  activeSelectBoxes.forEach((s) => s.classList.toggle("active"));
  activeDropdowns.forEach((d) => {
    const activeDropdown = d;
    activeDropdown.classList.toggle("active");
    activeDropdown.hidden = true;
  });
};

const isActiveDropdown = (e) => e.target.closest(".select-box.active") || e.target.closest(".dropdown.active");

const updateSelectBox = (dropdown, content) => {
  const selectBox = dropdown.previousElementSibling;
  selectBox.firstElementChild.value = content;
};

const activateSelectBox = (dropdown) => {
  const selectBox = dropdown.previousElementSibling;
  if (!selectBox.classList.contains("selected")) {
    selectBox.classList.add("selected");
  }
};

const deactivateSelectBox = (dropdown) => {
  const selectBox = dropdown.previousElementSibling;
  selectBox.classList.remove("selected");
  updateSelectBox(dropdown, "");
};

const selectItem = (e) => {
  const item = e.target.closest(".dropdown-item");
  if (item.classList.contains("item-addition")) {
    hideActiveDropdown();
    return;
  }

  const content = item.firstElementChild.firstElementChild.textContent;
  const dropdown = item.closest(".dropdown");
  updateSelectBox(dropdown, content);
  activateSelectBox(dropdown);
  hideActiveDropdown();
};

const toggleDropdown = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!isActiveDropdown(e)) {
    hideActiveDropdown();
  }

  const selectBox = e.currentTarget;
  const dropdown = selectBox.nextElementSibling;

  selectBox.classList.toggle("active");
  dropdown.classList.toggle("active");
  dropdown.hidden = !dropdown.hidden;
};

const initDropdown = () => {
  const selectBoxes = document.querySelectorAll(".select-box");
  const dropdowns = document.querySelectorAll(".dropdown");

  selectBoxes.forEach((s) => {
    const box = s;
    box.firstElementChild.disabled = true;
    box.addEventListener("click", toggleDropdown);
  });
  dropdowns.forEach((d) => {
    d.addEventListener("click", selectItem);
  });

  document.addEventListener("click", hideActiveDropdown);
};

export { initDropdown, updateSelectBox, deactivateSelectBox };
