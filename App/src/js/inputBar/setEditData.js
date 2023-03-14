import { getData } from "../localStorage/getData.js";
import { setInputBar } from "./setInputBar.js";

export const setEditData = (e) => {
  const $this = e.target;

  if ($this.classList.contains("remove")) {
    return;
  }

  const $target_list_tr = $this.closest(".list_tr");
  if ($target_list_tr !== null) {
    const $list_tr = document.querySelectorAll(".list_tr");

    $list_tr.forEach(($tr) => {
      $tr.classList.remove("selected_list");
    });

    $target_list_tr.classList.add("selected_list");
    const key = $target_list_tr.querySelector(".uniqueKey").value;
    const data = getData(key);
    setInputBar(JSON.parse(data));
  }
};
