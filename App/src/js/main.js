import { dateInit } from "./date/index.js";
import { inputBarInit } from "./inputBar/index.js";
import { localStorageInit } from "./localStorage/index.js";
import { mainInit } from "./main/index.js";

// change option
const change_ul = () => {
  const expenditure_li = `<li class="option body-regular">
<span class="option">생활</span>
</li>
<li class="option body-regular">
<span class="option">식비</span>
</li>
<li class="option body-regular">
<span class="option">교통</span>
</li>
<li class="option body-regular">
<span class="option">쇼핑/뷰티</span>
</li>
<li class="option body-regular">
<span class="option">의료/건강</span>
</li>
<li class="option body-regular">
<span class="">문화/여가</span>
</li>
<li class="option body-regular">
<span class="option">미분류</span>
</li>`;

  const income_li = `<li class="option body-regular">
<span class="option">월급</span>
</li>
<li class="option body-regular">
<span class="option">용돈</span>
</li>
<li class="option body-regular">
<span class="option">기타수입</span>
</li>`;

  const select = document.getElementById("category_select");
  const checked = document.getElementById("price_toggle").checked;
  const drop_menu = document.getElementById("drop_menu");
  const new_ul = document.createElement("ul");
  new_ul.id = "drop_menu";

  checked
    ? (new_ul.innerHTML = expenditure_li)
    : (new_ul.innerHTML = income_li);
  if (drop_menu !== null) {
    select.removeChild(drop_menu);
  }
  select.appendChild(new_ul);
};

const init = () => {
  const price_checkbox = document.getElementById("price_checkbox");

  price_checkbox.addEventListener("click", change_ul);
  inputBarInit();
  localStorageInit();
  mainInit();
  dateInit();
};

init();
