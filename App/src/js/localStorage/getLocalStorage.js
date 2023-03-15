import { getDate } from "../date/getDate.js";

export const getLocalStorage = () => {
  const [year, month] = getDate();
  const date = year.textContent + month.textContent.padStart(2, 0);
  const keys = Object.keys(localStorage);
  const values = keys
    .map((key) => JSON.parse(localStorage.getItem(key)))
    .filter((e) => e.date.slice(0, 6) === date)
    .sort((a, b) => Number(b.uniqueKey) - Number(a.uniqueKey));

  return values;
};
