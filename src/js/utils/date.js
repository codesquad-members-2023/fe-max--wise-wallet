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
