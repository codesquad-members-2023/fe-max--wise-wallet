import { toggleSelectBox } from "./toggleSelectBox.js";

export const selectOption = ($this) => {
  const $select = $this.closest(".select");
  const $selected_value = $select.querySelector(".selected_value");
  const $selected_text = $select.querySelector(".selected_text");

  $selected_value.value = $this.textContent.trim();
  $selected_text.textContent = $this.textContent.trim();

  // 이벤트 객체를 생성
  const changeEvent = new Event("keyup", { bubbles: true });
  // // selectedInput에 직접 change 이벤트를 발생
  $selected_value.dispatchEvent(changeEvent);
  toggleSelectBox($this);
};
