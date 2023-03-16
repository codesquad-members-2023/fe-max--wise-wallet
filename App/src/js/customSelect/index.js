import { addPaymentClickEvent } from "./addPaymentClickEvent.js";
import { removePaymentClickEvent } from "./removePaymentClickEvent.js";
import { toggleSelectBox } from "./toggleSelectBox.js";
import { selectOption } from "./selectOption.js";

export const customSelectInit = () => {
  const $add_option = document.getElementById("add-option");
  const $input_bar_form = document.getElementById("input_bar_form");

  $input_bar_form.addEventListener("click", (e) => {
    const $this = e.target;

    if ($this.closest(".selected")) {
      toggleSelectBox($this);
      return;
    }

    if ($this.closest("li.option")) {
      const isRmoveBtn = $this.classList.contains("remove_option_btn");
      if (isRmoveBtn) {
        removePaymentClickEvent($this);
        return;
      }

      if ($this.classList.contains("option")) {
        selectOption($this);
        return;
      }
    }
  });

  $add_option.addEventListener("click", addPaymentClickEvent);
};
