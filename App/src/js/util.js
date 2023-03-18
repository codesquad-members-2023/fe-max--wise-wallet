export const ONE_DAY_TIME = 1000 * 60 * 60 * 24;

export function dateformat(current) {
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const date = current.getDate();
  return `${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : date
  }`;
}

export function dateOneMonth(date) {
  let current = date;
  return new Date(`${current.getFullYear()}-${current.getMonth() + 1}-1`);
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

export function get12Month() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][this.getMonth()];
}

export function getCategoryString(index) {
  return [
    "생활",
    "식비",
    "교통",
    "쇼핑/뷰티",
    "의료/건강",
    "문화/여가",
    "미분류",
  ][index];
}

export function monthUnitData(when = new Date()) {
  const year = when.getFullYear();
  const month = when.getMonth() + 1;
  return new Date(`${year}-${month}-1`);
}

export function dateUnitDate(when = new Date()) {
  const year = when.getFullYear();
  const month = when.getMonth() + 1;
  const date = when.getDate();
  return new Date(`${year}-${month}-${date}`);
}
export function arrToMenuItemData(arr) {
  const menuItemDataArr = [];
  for (let i of arr) {
    menuItemDataArr.push([i, false]);
  }
  menuItemDataArr[0][1] = true;
  return menuItemDataArr;
}
