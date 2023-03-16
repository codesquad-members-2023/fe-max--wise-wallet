import { createOption } from "./createOption.js";

export const addPaymentClickEvent = (e) => {
  const $this = e.target.closest(".select");
  setAddModal();

  const $ul = document.querySelector("#payment_select ul");
  const $add_option_modal = document.getElementById("add_option_modal");
  const $confirm_btn = $add_option_modal.querySelector(".confirm_btn");
  const $cancel_btn = $add_option_modal.querySelector(".cancel_btn");
  const $input = $add_option_modal.querySelector("input");
  $add_option_modal.showModal();

  $confirm_btn.addEventListener("click", (event) => {
    if ($input.value == "") {
      $input.focus();
      event.preventDefault();
      return;
    }
    const new_option = createOption($input.value);
    $ul.prepend(new_option);
    $input.value = "";
  });

  $cancel_btn.addEventListener("click", () => {
    $add_option_modal.remove();
  });
};

const setAddModal = () => {
  const $modal_wrapper = document.getElementById("modal-wrapper");
  const modal = `
    <dialog id="add_option_modal" class="payment_modal">
      <form method="dialog">
        <h2 class="modal_tite body-regular">추가하실 결제수단을 적어주세요.</h2>

        <input type="text" class="modal_input body-regular" value="" />
        <menu>
          <button
            class="cancel_btn reset-btn bold-large primary"
            value="cancel"
          >
            취소
          </button>
          <button
            class="confirm_btn reset-btn bold-large secondary-yellow"
            value="default"
          >
            등록
          </button>
        </menu>
      </form>
    </dialog>`;
  $modal_wrapper.innerHTML = modal;
};
