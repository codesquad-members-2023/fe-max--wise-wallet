import { getData } from "../../localStorage/getData.js";
import { resetInputBar } from "./resetInputBar.js";
import { setInputBar } from "./setInputBar.js";

export const setEditData = ({ target }) => {
  if (!target.classList.contains("remove")) {
    const $target_input_bar = target.closest("#input_bar");
    const $target_dialog = target.closest("dialog");
    const $list_tr = document.querySelector(".selected_list");
    const isCancelSelect =
      $target_input_bar === null &&
      $list_tr !== null &&
      $target_dialog === null;

    if (isCancelSelect) {
      $list_tr.classList.remove("selected_list");
      resetInputBar();
    }

    const $target_list_tr = target.closest(".list_tr");
    if ($target_list_tr !== null) {
      resetInputBar();
      $target_list_tr.classList.add("selected_list");
      const key = $target_list_tr.querySelector(".uniqueKey").value;
      const data = JSON.parse(getData(key));
      setInputBar(data);
    }
  }
};
