const getNumberWithPreZeros = (number, digit) => String(number).padStart(digit, 0);

const getDateInfo = () => {
  const curr = new Date();
  return {
    year: curr.getFullYear(),
    month: curr.getMonth() + 1,
    date: curr.getDate(),
  };
};

const getNumberWithoutComma = (numberStr) => parseInt(numberStr.replaceAll(",", ""));

export { getNumberWithPreZeros, getDateInfo, getNumberWithoutComma };
