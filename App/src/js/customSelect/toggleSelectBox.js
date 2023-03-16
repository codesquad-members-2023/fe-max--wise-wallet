export const toggleSelectBox = ($this) => {
  const $selectBox = $this.closest(".select");
  $selectBox.classList.toggle("active");
};
