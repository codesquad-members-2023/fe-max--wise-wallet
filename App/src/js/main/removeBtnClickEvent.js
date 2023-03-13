import { removeData } from "../localStorage/removeData.js";
import { getData } from "../localStorage/getData.js";
import { mainInit } from "./index.js";

export const removeBtn = ($btn) => {
  $btn.addEventListener("click", (e) => {
    const key = e.target.nextElementSibling.value;
    const data = JSON.parse(getData(key));
    const $remove_list_modal_text = document.getElementById(
      "remove_list_modal_text"
    );
    const $remove_list_modal = document.getElementById("remove_list_modal");
    const $confirm_btn = $remove_list_modal.querySelector(".confirm_btn");
    const $cancel_btn = $remove_list_modal.querySelector(".cancel_btn");

    $remove_list_modal_text.innerHTML = `<p class="bold-medium">카테고리 : ${
      data.isPositive ? "수입" : "지출"
    } / ${data.category_select}</p>`;
    $remove_list_modal_text.innerHTML += `<p class="bold-medium">내용 : ${data.content}</p>`;
    $remove_list_modal_text.innerHTML += `<p class="bold-medium">결제수단 : ${data.payment}</p>`;
    $remove_list_modal_text.innerHTML += `<p class="bold-medium">금액 : ${data.price} 원</p>`;

    $remove_list_modal.showModal();

    // 삭제 버튼
    $confirm_btn.addEventListener("click", () => {
      removeData(key);
      mainInit();
    });

    // 취소 버튼
    $cancel_btn.addEventListener("click", () => {
      $remove_list_modal.close();
    });
  });
};
