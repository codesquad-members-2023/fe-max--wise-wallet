import { createOption } from "./createOption.js";

export const addPaymentClickEvent = (select) => {
  select.addEventListener("click", (e) => {
    const $add_option_modal = document.getElementById("add_option_modal");
    const $ul = e.target.closest("ul");
    $add_option_modal.showModal();

    const modal_form = $add_option_modal.querySelector("form");
    const modal_input = $add_option_modal.querySelector("input");

    // 확인 버튼
    modal_form.addEventListener("submit", (event) => {
      if (modal_input.value == "") {
        event.preventDefault();
        modal_input.focus();
      } else {
        const new_option = createOption(modal_input.value);
        $ul.prepend(new_option);
        modal_input.value = "";
      }
    });

    const cancel_btn = document.querySelector("#add_option_modal .cancel_btn");

    // 취소 버튼
    cancel_btn.addEventListener("click", () => {
      $add_option_modal.close();
    });
  });
};
