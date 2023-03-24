export const currentDate = new Date();
export const year = currentDate.getFullYear();
export const month = currentDate.getMonth() + 1;
export const date = currentDate.getDate();

export const monthTexts = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthText = monthTexts[month - 1];

export const getMonthText = (mon) => monthTexts[mon - 1];

export const getDayOfWeek = (dateValue) => {
  const dateInput = new Date(dateValue);
  const dayOfWeek = dateInput.getDay();
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return days[dayOfWeek];
};
export const formatDate = (dateValue) => {
  const yearStr = String(dateValue).slice(0, 4);
  const monthStr = String(dateValue).slice(4, 6);
  const dayStr = String(dateValue).slice(6, 8);

  return `${yearStr}-${monthStr}-${dayStr}`;
};
