export const addComma = (value) => {
  value = value.toString().replaceAll(",", "");
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
