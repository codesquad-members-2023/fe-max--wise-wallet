const getNumberWithPreZeros = (number, digit) => {
  return String(number).padStart(digit, 0);
};

const getDateInfo = () => {
  const curr = new Date();
  return {
    year: curr.getFullYear(),
    month: curr.getMonth() + 1,
    date: curr.getDate(),
  };
};

export { getNumberWithPreZeros, getDateInfo };
