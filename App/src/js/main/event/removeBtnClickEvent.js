import { removeData } from "../../localStorage/removeData.js";
import { getData } from "../../localStorage/getData.js";
import { createNode } from "../../utils/createNode.js";
import { setMainDisplay } from "../display/setMainDisplay.js";

export const removeBtn = ($this) => {
  const key = $this.nextElementSibling.value;
  setRemoveListModal(key);

  const $remove_list_modal = document.getElementById("remove_list_modal");
  $remove_list_modal.showModal();

  const $confirm_btn = $remove_list_modal.querySelector(".confirm_btn");
  $confirm_btn.addEventListener("click", () => {
    removeData(key);
    setMainDisplay();
  });

  const $cancel_btn = $remove_list_modal.querySelector(".cancel_btn");
  $cancel_btn.addEventListener("click", () => {
    $remove_list_modal.close();
    $remove_list_modal.remove();
  });
};

const setRemoveListModal = (key) => {
  const data = JSON.parse(getData(key));
  const modal = `
  <dialog id="remove_list_modal" class="payment_modal">
    <form method="dialog">
      <h2 class="modal_tite body-regular">아래 내역을 삭제하시겠습니까?</h2>
      <div id="remove_list_modal_text">
        <p class="bold-medium">카테고리 : ${
          data.isPositive ? "수입" : "지출"
        } / ${data.category_select} </p>
        <p class="bold-medium">내용 : ${data.content}</p>
        <p class="bold-medium">결제수단 : ${data.payment}</p>
        <p class="bold-medium">금액 : ${data.price} 원</p>
      </div>
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

  const $modal_wrapper = document.getElementById("modal-wrapper");
  const nodeList = createNode(modal);
  nodeList.forEach((e) => {
    $modal_wrapper.appendChild(e);
  });
};
