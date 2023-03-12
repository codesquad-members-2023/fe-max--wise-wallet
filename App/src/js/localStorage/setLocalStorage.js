// main.js와 중복 사용중이다.
// date 관련 함수들을 main에서 따로 분류할 예정
const setDate = (date_element, date) => {
  const [year, month, month_en] = date_element;

  const year_Text = date.getFullYear();
  const month_Text = date.getMonth() + 1;
  const month_en_Text = date.toLocaleString("en-US", { month: "long" });

  year.innerHTML = year_Text;
  month.innerHTML = month_Text;
  month_en.innerHTML = month_en_Text;
};

// get Date
const get_date_element = () => {
  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const month_en = document.getElementById("month_en");

  return [year, month, month_en];
};

// set Date Now
const setNow = () => {
  setDate(get_date_element(), new Date());
  const date = new Date();
  const year_Text = date.getFullYear();
  const month_Text = String(date.getMonth() + 1);
  const day_Text = String(date.getDate());

  document.getElementById("input_date").value = parseInt(
    `${year_Text}${month_Text.padStart(2, "0")}${day_Text.padStart(2, "0")}`
  );
};

export const setLocalStorage = () => {
  const uniqueKey = new Date().getTime().toString();
  const date = document.getElementById("input_date");
  const price = document.getElementById("input_price");
  const isPositive = document.getElementById("price_toggle");
  const content = document.getElementById("input_content");
  const payment = document.getElementById("payment_value");
  const category_select = document.getElementById("category_value");

  const obj = {
    uniqueKey: uniqueKey,
    date: date.value,
    price: Number(price.value.replaceAll(",", "")),
    isPositive: isPositive.checked,
    content: content.value,
    payment: payment.value,
    category_select: category_select.value,
  };
  localStorage.setItem(uniqueKey, JSON.stringify(obj));
  resetInputBar(date, price, isPositive, content, payment, category_select);
};

const resetInputBar = (
  date,
  price,
  isPositive,
  content,
  payment,
  category_select
) => {
  setNow();
  price.value = "";
  isPositive.checked = false;
  content.value = "";
  payment.value = "";
  category_select.value = "";

  // inputbar 폴더로 따로 만들까..?
  const $selected_value = document.querySelectorAll(".selected-value");
  // class명 바꾸자..ㅠ
  $selected_value.forEach((div) => {
    div.textContent = "선택하세요";
  });
};
