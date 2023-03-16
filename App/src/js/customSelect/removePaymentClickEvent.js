export const removePaymentClickEvent = ($this) => {
  const text = $this.previousElementSibling.textContent;
  setRemoveModal(text);

  const $li = $this.closest("li");
  const $remove_option_modal = document.getElementById("remove_option_modal");
  const $input = $remove_option_modal.querySelector("input");
  const $selectBox = $this.closest(".select");
  const $selected_value = $selectBox.querySelector(".selected-value");
  const $selected_text = $selectBox.querySelector(".selected_text");
  const $confirm_btn = $remove_option_modal.querySelector(".confirm_btn");
  const $cancel_btn = $remove_option_modal.querySelector(".cancel_btn");

  $input.value = text;
  $remove_option_modal.showModal();

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
    $remove_option_modal.remove();
  });
};

const setRemoveModal = (text) => {
  const $modal_wrapper = document.getElementById("modal-wrapper");
  const modal = `<dialog id="remove_option_modal" class="payment_modal">
    <form method="dialog">
      <h2 class="modal_tite body-regular">해당 결제수단을 삭제하시겠습니까?</h2>
      <input type="text" class="modal_input body-regular" value="${text}" disabled />
      <menu>
        <button class="cancel_btn reset-btn bold-large primary" value="cancel">
          취소
        </button>
        <button
          class="confirm_btn reset-btn bold-large secondary-red"
          value="default"
        >
          삭제
        </button>
      </menu>
    </form>
  </dialog>`;
  $modal_wrapper.innerHTML = modal;
};
