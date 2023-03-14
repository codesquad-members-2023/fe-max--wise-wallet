export const setTransactionLocalStorage = (data) => {
  localStorage.setItem("transaction-items", data);
};

export const getTransactionLocalStorage = () => {
  return localStorage.getItem("transaction-items");
};
