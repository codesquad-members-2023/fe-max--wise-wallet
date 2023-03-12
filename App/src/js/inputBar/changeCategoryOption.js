export const changeCategoryOption = () => {
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

  const $category_select = document.getElementById("category_select");
  const $price_toggle = document.getElementById("price_toggle").checked;
  const $drop_menu = document.getElementById("drop_menu");
  const $ul = document.createElement("ul");
  $ul.id = "drop_menu";

  $price_toggle
    ? ($ul.innerHTML = expenditure_li)
    : ($ul.innerHTML = income_li);
  if ($drop_menu !== null) {
    $category_select.removeChild($drop_menu);
  }
  $category_select.appendChild($ul);
};
