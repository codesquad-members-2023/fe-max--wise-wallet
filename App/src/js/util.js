const ONE_DAY_TIME = 1000 * 60 * 60 * 24;

export function previousMonth(date) {
  let current = date;
  while (date.getMonth() === current.getMonth()) {
    current = new Date(current.getTime() - ONE_DAY_TIME);
  }
  return new Date(`${current.getFullYear()}-${current.getMonth() + 1}-1`);
}


export function nextMonth(date) {
  let current = date;
  while (date.getMonth() === current.getMonth()) {
    current = new Date(current.getTime() + ONE_DAY_TIME);
  }
  return new Date(`${current.getFullYear()}-${current.getMonth() + 1}-1`);
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
