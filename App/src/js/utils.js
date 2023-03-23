import { categories, categoryNumber } from "./System.js";

export const ONE_DAY_TIME = 1000 * 60 * 60 * 24;

export function dateFormat(current) {
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const date = current.getDate();
  return `${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : date
  }`;
}

export function dateOneMonth(current) {
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  return new Date(`${year}-${month < 10 ? "0" + month : month}-01`);
}

export function monthDateToDateArr(monthDate) {
  const day = monthDate.getDay();
  const dateArr = [];

  let row = [];
  let temp = monthDate;

  for (let i = 0; i < day; i++) {
    row.push(null);
  }

  while (monthDate.getMonth() === temp.getMonth()) {
    if (row.length === 7) {
      dateArr.push([...row]);
      row = [];
    }
    row.push(new Date(temp.getTime()));
    temp = new Date(temp.getTime() + ONE_DAY_TIME);
  }

  if (row.length !== 0) {
    while (row.length != 7) {
      row.push(null);
    }
    dateArr.push(row);
  }

  return dateArr;
}

export function previousMonth(date) {
  let current = date;
  while (date.getMonth() === current.getMonth()) {
    current = new Date(current.getTime() - ONE_DAY_TIME);
  }
  return dateOneMonth(current);
}

export function nextMonth(date) {
  let current = date;
  while (date.getMonth() === current.getMonth()) {
    current = new Date(current.getTime() + ONE_DAY_TIME);
  }
  return dateOneMonth(current);
}

export function getCategoryString(index) {
  return categories[index];
}

export function getCategoryNumber(category) {
  return categoryNumber[category];
}

export function arrToMenuItemData(arr) {
  const menuItemDataArr = [];
  for (let i of arr) {
    menuItemDataArr.push([i, false]);
  }
  menuItemDataArr[0][1] = true;
  return menuItemDataArr;
}
