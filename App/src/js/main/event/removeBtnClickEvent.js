import { removeData } from "../../localStorage/removeData.js";
import { getData } from "../../localStorage/getData.js";
import { createNode } from "../../utils/createNode.js";
import { setMainDisplay } from "../display/setMainDisplay.js";

export const removeBtn = ($this) => {
  setRemoveListModal();
  const key = $this.nextElementSibling.value;
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
    setMainDisplay();
  });

  // 취소 버튼
  $cancel_btn.addEventListener("click", () => {
    $remove_list_modal.close();
    $remove_list_modal.remove();
  });
};

const setRemoveListModal = () => {
  const $modal_wrapper = document.getElementById("modal-wrapper");

  const modal = `<dialog id="remove_list_modal" class="payment_modal">
    <form method="dialog">
      <h2 class="modal_tite body-regular">아래 내역을 삭제하시겠습니까?</h2>
      <div id="remove_list_modal_text"></div>
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
  const nodeList = createNode(modal);
  nodeList.forEach((e) => {
    $modal_wrapper.appendChild(e);
  });
};
