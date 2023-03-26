export const addComma = (value) => {
  value = value.toString().replaceAll(",", "");

  return Number(value).toLocaleString();
};
