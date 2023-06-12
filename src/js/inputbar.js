export function inputbarInit() {
  showCurrentDate();
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = year + month + day;
  return formattedDate;
}

function showCurrentDate() {
  const input = document.querySelector('#date__input');
  input.value = getCurrentDate();
}
