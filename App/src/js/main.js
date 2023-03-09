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

const init = () => {
  const left_arrow = document.getElementById("left-Arrow");
  const right_arrow = document.getElementById("right-Arrow");
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
