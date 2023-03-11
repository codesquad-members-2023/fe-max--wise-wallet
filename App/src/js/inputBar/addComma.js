export const addComma = ({ target }) => {
  const value = target.value.replaceAll(",", "");
  target.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
