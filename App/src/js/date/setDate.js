export const setDate = (date_element, date) => {
  const [year, month, month_en] = date_element;

  const year_Text = date.getFullYear();
  const month_Text = date.getMonth() + 1;
  const month_en_Text = date.toLocaleString("en-US", { month: "long" });

  year.innerHTML = year_Text;
  month.innerHTML = month_Text;
  month_en.innerHTML = month_en_Text;
};
