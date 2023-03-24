import { getMonthlyList } from "../../utils/getMonthlyList.js";

//총 건수, 총 합계 => 해당 월의 총 건수와 총 합계로 바뀌어야 함
const addUpAllIncome = () => {
  //키를 가져옴, 키로 각 항목을 배열로 만들어줌
  return getMonthlyList()
    .filter((el) => el.type === true)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};
//함수를 따로 놓지 않을 수 있지 않을가...
const addUpAllExpenditure = () => {
  return getMonthlyList()
    .filter((el) => el.type === false)
    .reduce((acc, cur) => {
      return acc + Number(cur.price.replaceAll(",", ""));
    }, 0);
};

export { addUpAllIncome, addUpAllExpenditure };
