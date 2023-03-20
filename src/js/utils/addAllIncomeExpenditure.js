const addAllIncome = () => {
  //키를 가져옴, 키로 각 항목을 배열로 만들어줌
  return Object.keys(localStorage)
    .map((el) => JSON.parse(localStorage.getItem(el)))
    .filter((el) => el.type === true)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};
const addAllExpenditure = () => {
  return Object.keys(localStorage)
    .map((el) => JSON.parse(localStorage.getItem(el)))
    .filter((el) => el.type === false)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};

export { addAllIncome, addAllExpenditure };
