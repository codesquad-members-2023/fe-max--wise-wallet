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

// set Date Now
setDate(get_date_element(), new Date());

const left_arrow = document.getElementById("left-Arrow");
const right_arrow = document.getElementById("right-Arrow");

left_arrow.addEventListener("click", () => {
  const [year, month, month_en] = get_date_element();
  const newDate = new Date(year.innerHTML, month.innerHTML - 2);
  setDate([year, month, month_en], newDate);
});

right_arrow.addEventListener("click", () => {
  const [year, month, month_en] = get_date_element();
  const newDate = new Date(year.innerHTML, month.innerHTML);
  setDate([year, month, month_en], newDate);
});
