import { getData } from "../localStorage/getData.js";
import { resetInputBar } from "./resetInputBar.js";
import { setInputBar } from "./setInputBar.js";

export const setEditData = (e) => {
  const $this = e.target;

  if ($this.classList.contains("remove")) {
    return;
  }

  const $target_input_bar = $this.closest("#input_bar");
  const $list_tr = document.querySelector(".selected_list");

  if ($target_input_bar === null && $list_tr !== null) {
    $list_tr.classList.remove("selected_list");
    resetInputBar();
  }

  const $target_list_tr = $this.closest(".list_tr");
  if ($target_list_tr !== null) {
    $target_list_tr.classList.add("selected_list");
    const key = $target_list_tr.querySelector(".uniqueKey").value;
    const data = JSON.parse(getData(key));
    setInputBar(data);
  }
};
