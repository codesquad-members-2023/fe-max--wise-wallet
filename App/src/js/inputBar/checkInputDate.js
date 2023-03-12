const isValidDate = (dateString) => {
  if (!/^\d{4}\d{2}\d{2}$/.test(dateString)) {
    return false;
  }

  const year = parseInt(dateString.substr(0, 4));
  const month = parseInt(dateString.substr(4, 2)) - 1;
  const day = parseInt(dateString.substr(6, 2));
  const date = new Date(year, month, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
};

export const checkInputDate = ({ target }) => {
  console.log(target);
  if (!isValidDate(target.value)) {
    target.focus();
  }
};
