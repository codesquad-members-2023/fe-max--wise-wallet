export const removePaymentClickEvent = (select) => {
  select.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const $remove_option_modal = document.getElementById("remove_option_modal");
    $remove_option_modal.showModal();

    const $this = e.target; //요소 선택
    let element = $this.previousSibling; // 바로 이전에 있는 요소 선택

    // 텍스트 노드, 주석 노드 등이 반환될 수 있으므로, 요소 노드인지 검사
    while (element && element.nodeType !== 1) {
      element = element.previousSibling; // 요소 노드가 아니면 다시 이전 요소로 이동
    }

    const text = element.textContent;
    const $input = $remove_option_modal.querySelector("input");
    const $selectBox = $this.closest(".select");
    const $selected_value = $selectBox.querySelector(".selected-value");
    const $selected_text = $selectBox.querySelector(".selected_text");
    const $confirm_btn = $remove_option_modal.querySelector(".confirm_btn");
    const $cancel_btn = $remove_option_modal.querySelector(".cancel_btn");

    $input.value = text;

    // 삭제 버튼
    $confirm_btn.addEventListener("click", () => {
      if (
        $selected_value.textContent === $selected_text.value &&
        $selected_text.value === text
      ) {
        $selected_value.textContent = "선택하세요";
        $selected_text.value = "";
      }
      $li.remove();
    });

    // 취소 버튼
    $cancel_btn.addEventListener("click", () => {
      $add_option_modal.close();
    });
  });
};
