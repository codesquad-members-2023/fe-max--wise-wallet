export function get12Month() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][this.getMonth()]
}

export function getCategoryString(index) {
  return ["생활", "식비", "교통", "쇼핑/뷰티", "의료/건강", "문화/여가", "미분류"][index]
}