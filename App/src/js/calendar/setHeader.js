export const setHeader = () => {
  const $calendar = document.getElementById("calendar");

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const $header = document.createElement("header");
  $header.id = "calendarHeader";
  dayOfWeek.forEach((e) => {
    const $div = document.createElement("div");
    $div.classList.add("dayOfWeek");
    $div.textContent = e;
    $header.appendChild($div);
  });

  $calendar.appendChild($header);
};
