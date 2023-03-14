import { initInputBarDate } from "../../init/initInputBarDate.js";
import { inputBarStore } from "../../store/inputBarStore.js";

export const handleDateChange = ({ target }) => {
  const inputDate = target.value;
  const isValidDate = /^(1000|1\d{3}|[2-9]\d{3})((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(inputDate);

  if (!isValidDate) {
    alert("유효한 날짜가 아닙니다.");
    initInputBarDate();

    return;
  }

  const date = {
    year: inputDate.slice(0, 4),
    month: inputDate.slice(4, 6),
    date: inputDate.slice(6, 8),
  };

  inputBarStore.setDate(date);
};
