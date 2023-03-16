import { inputStore } from "../store/inputStore.js";

const addAllIncome = () => {
  return inputStore.listArray
    .filter((el) => el.type === true)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};
const addAllExpenditure = () => {
  return inputStore.listArray
    .filter((el) => el.type === false)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};

export { addAllIncome, addAllExpenditure };
