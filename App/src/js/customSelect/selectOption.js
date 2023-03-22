import { toggleSelectBox } from "./toggleSelectBox.js";

export const selectOption = ($this) => {
  const $select = $this.closest(".select");
  const $selected_value = $select.querySelector(".selected_value");
  const $selected_text = $select.querySelector(".selected_text");

  $selected_value.value = $this.textContent.trim();
  $selected_text.textContent = $this.textContent.trim();

  const keyupEvent = new Event("keyup", { bubbles: true });
  $selected_value.dispatchEvent(keyupEvent);
  toggleSelectBox($this);
};
