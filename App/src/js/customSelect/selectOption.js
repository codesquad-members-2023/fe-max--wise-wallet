export const selectOption = (optionElement) => {
  const $select = optionElement.closest(".select");
  const $selected_value = $select.querySelector(".selected-value");
  const $selected_text = $select.querySelector(".selected_text");

  $selected_value.textContent = optionElement.textContent.trim();
  $selected_text.value = optionElement.textContent.trim();

  // 이벤트 객체를 생성
  const changeEvent = new Event("change");
  // selectedInput에 직접 change 이벤트를 발생
  $selected_text.dispatchEvent(changeEvent);
};
