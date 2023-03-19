export const setDate = (dateElement, date) => {
  const [year, month, month_en] = dateElement;

  const yearText = date.getFullYear();
  const monthText = date.getMonth() + 1;
  const monthText_EN = date.toLocaleString("en-US", { month: "long" });

  year.innerHTML = yearText;
  month.innerHTML = monthText;
  month_en.innerHTML = monthText_EN;
};
