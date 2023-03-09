// get Date
const get_date_element = () => {
  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const month_en = document.getElementById("month_en");

  return [year, month, month_en];
};

// set Date
const setDate = (date_element, date) => {
  const [year, month, month_en] = date_element;

  const year_Text = date.getFullYear();
  const month_Text = date.getMonth() + 1;
  const month_en_Text = date.toLocaleString("en-US", { month: "long" });

  year.innerHTML = year_Text;
  month.innerHTML = month_Text;
  month_en.innerHTML = month_en_Text;
};

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

  const select = document.getElementById("select_div");
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
  const left_arrow = document.getElementById("left-Arrow");
  const right_arrow = document.getElementById("right-Arrow");
  const price_checkbox = document.getElementById("price_checkbox");

  const input_bar_date = left_arrow.addEventListener("click", () => {
    const [year, month, month_en] = get_date_element();
    const newDate = new Date(year.innerHTML, month.innerHTML - 2);
    setDate([year, month, month_en], newDate);
  });

  right_arrow.addEventListener("click", () => {
    const [year, month, month_en] = get_date_element();
    const newDate = new Date(year.innerHTML, month.innerHTML);
    setDate([year, month, month_en], newDate);
  });

  price_checkbox.addEventListener("click", change_ul);

  // set Date Now
  setDate(get_date_element(), new Date());
  const date = new Date();
  const year_Text = date.getFullYear();
  const month_Text = String(date.getMonth() + 1);
  const day_Text = String(date.getDate());

  document.getElementById("input_date").value = parseInt(
    `${year_Text}${month_Text.padStart(2, "0")}${day_Text.padStart(2, "0")}`
  );
};
init();
