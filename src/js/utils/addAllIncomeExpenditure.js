const addAllIncome = () => {

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
