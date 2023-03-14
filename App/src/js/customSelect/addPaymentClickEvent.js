import { createOption } from "./createOption.js";

export const addPaymentClickEvent = (select) => {
  select.addEventListener("click", (e) => {
    const $add_option_modal = document.getElementById("add_option_modal");
    const $ul = e.target.closest("ul");
    const $confirm_btn = $add_option_modal.querySelector(".confirm_btn");
    const $cancel_btn = $add_option_modal.querySelector(".cancel_btn");
    const $input = $add_option_modal.querySelector("input");

    $add_option_modal.showModal();

    // 확인 버튼
    $confirm_btn.addEventListener("click", (event) => {
      if ($input.value == "") {
        $input.focus();
      } else {
        const new_option = createOption($input.value);
        $ul.prepend(new_option);
        $input.value = "";
      }
    });

    // 취소 버튼
    $cancel_btn.addEventListener("click", () => {
      $add_option_modal.close();
    });
  });
};
