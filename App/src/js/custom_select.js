const toggleSelectBox = (selectBox) => {
  selectBox.classList.toggle("active");
};

const selectOption = (optionElement) => {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".selected-value");
  const selectedInput = selectBox.querySelector(".selected_text");

  selectedElement.textContent = optionElement.textContent.trim();
  selectedInput.value = optionElement.textContent.trim();

  // 이벤트 객체를 생성
  const changeEvent = new Event("change");
  // selectedInput에 직접 change 이벤트를 발생
  selectedInput.dispatchEvent(changeEvent);
};

const create_option = (value) => {
  const element = `<span class="option">${value}</span>
    <button
      class="remove_option_btn reset-btn"
      type="button"
    ></button>`;

  const new_li = document.createElement("li");
  new_li.innerHTML = element;

  new_li.classList.add("add-option");
  new_li.classList.add("body-regular");
  return new_li;
};

const custom_select_init = () => {
  const selectBoxElements = document.querySelectorAll(".select");
  const add_element = document.querySelectorAll(".add-option");
  const remove_option_btn = document.querySelectorAll(".remove_option_btn");

  selectBoxElements.forEach((selectBoxElement) => {
    selectBoxElement.addEventListener("click", function (e) {
      const targetElement = e.target;
      const isOptionElement = targetElement.classList.contains("option");
      if (isOptionElement) {
        selectOption(targetElement);
      }

      toggleSelectBox(selectBoxElement);
    });
  });

  // 결제수단 추가하기 버튼
  add_element.forEach((select) => {
    select.addEventListener("click", (e) => {
      const add_option_modal = document.getElementById("add_option_modal");
      const select_box = e.target.closest("ul");
      add_option_modal.showModal();

      const modal_form = add_option_modal.querySelector("form");
      const modal_input = add_option_modal.querySelector("input");

      // 확인 버튼
      modal_form.addEventListener("submit", (event) => {
        if (modal_input.value == "") {
          event.preventDefault();
          modal_input.focus();
        } else {
          const new_option = create_option(modal_input.value);
          select_box.insertBefore(new_option, select_box.firstElementChild);
          modal_input.value = "";
        }
      });

      const cancel_btn = document.querySelector(
        "#add_option_modal .cancel_btn"
      );

      // 취소 버튼
      cancel_btn.addEventListener("click", () => {
        add_option_modal.close();
      });
    });
  });

  // 결제수단 삭제 버튼
  remove_option_btn.forEach((select) => {
    select.addEventListener("click", (e) => {
      const target = e.target.closest("li");
      const remove_option_modal = document.getElementById(
        "remove_option_modal"
      );
      remove_option_modal.showModal();

      const _this = e.target; //요소 선택
      let element = _this.previousSibling; // 바로 이전에 있는 요소 선택

      // 텍스트 노드, 주석 노드 등이 반환될 수 있으므로, 요소 노드인지 검사
      while (element && element.nodeType !== 1) {
        element = element.previousSibling; // 요소 노드가 아니면 다시 이전 요소로 이동
      }

      const text = element.textContent;
      const modal_form = remove_option_modal.querySelector("form");
      const modal_input = remove_option_modal.querySelector("input");
      const selectBox = _this.closest(".select");
      const selectedElement = selectBox.querySelector(".selected-value");
      const selectedInput = selectBox.querySelector(".selected_text");

      modal_input.value = text;

      modal_form.addEventListener("submit", (event) => {
        if (
          selectedElement.textContent === selectedInput.value &&
          selectedInput.value === text
        ) {
          selectedElement.textContent = "선택하세요";
          selectedInput.value = "";
        }
        target.remove();
      });
    });
  });
};

custom_select_init();
