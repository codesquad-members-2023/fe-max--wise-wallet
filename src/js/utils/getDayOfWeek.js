import { $ } from "./dom.js";

export const getDayOfWeek = () => {
  const year = $("#date-input").value.slice(0, 4);
  const month = $("#date-input").value.slice(4, 6);
  const day = $("#date-input").value.slice(-2);
  const makeDate = new Date(`${year}-${month}-${day}`);
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
    makeDate.getDay()
  ];

  return dayOfWeek
};
