// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;

// document.getElementById("year").innerHTML = year;
// document.getElementById("month").innerHTML = month;

// // 월 이름 배열
// const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

// // 이전 달 버튼 클릭 이벤트 핸들러
// document.getElementById("prev-month").addEventListener("click", function () {
//     let month = parseInt(document.getElementById("month").textContent);
//     month--;
//     if (month < 1) {
//         month = 12;
//         document.getElementById("year").textContent--;
//     }
//     document.getElementById("month").textContent = month;
//     document.getElementById("month-name").textContent = monthNames[month - 1];
// });

// // 다음 달 버튼 클릭 이벤트 핸들러
// document.getElementById("next-month").addEventListener("click", function () {
//     let month = parseInt(document.getElementById("month").textContent);
//     month++;
//     if (month > 12) {
//         month = 1;
//         document.getElementById("year").textContent++;
//     }
//     document.getElementById("month").textContent = month;
//     document.getElementById("month-name").textContent = monthNames[month - 1];
// });

// // 초기 월 이름 표시
// const initialMonth = parseInt(document.getElementById("month").textContent);
// document.getElementById("month-name").textContent =
//     monthNames[initialMonth - 1];

