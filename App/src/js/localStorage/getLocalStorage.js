export const getLocalStorage = () => {
  const keys = Object.keys(localStorage);
  const values = keys.map((key) => JSON.parse(localStorage.getItem(key)));

  return values.sort((a, b) => Number(b.uniqueKey) - Number(a.uniqueKey));
};
