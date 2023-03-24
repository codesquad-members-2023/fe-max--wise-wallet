function getDateEl() {
    const yearNumber = document.querySelector(".header__year");
    const monthNumber = document.querySelector(".month-number");
    const monthName = document.querySelector(".month-name");

    return [yearNumber, monthNumber, monthName];
}

function setDate(dateElement, date) {
    const [yearNumber, monthNumber, monthName] = dateElement;
    yearNumber.textContent = date.getFullYear();
    monthNumber.textContent = date.getMonth() + 1;
    monthName.textContent = date.toLocaleString("en-US", {
        month: "long",
    });
}
setDate(getDateEl(), new Date());

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 헤더 먼스이어 안의 이미지태그로 이벤트리스너를 걸고
// 안에서 클래스 prev next를 조건으로 걸어서 줄이고 늘리고 가능한지?
// 챗지피티로 확인

// function changeMonth(command) {
//     const num = command === "prev" ? 2 : 0;
//     const [yearNumber, monthNumber, monthName] = getDateEl();

//     const newDate = new Date(
//         yearNumber.textContent,
//         monthNumber.textContent - num
//     );
//     setDate([yearNumber, monthNumber, monthName], newDate);
// }
function changeMonth(command) {
    const numMonthToChange = command === "prev" ? 2 : 0;
    const [yearNumber, monthNumber, monthName] = getDateElements();
    const newDate = new Date(
        year.innerHTML,
        month.innerHTML - numMonthToChange
    );
    setDate([yearNumber, monthNumber, monthName], newDate);
}

const headerDate = document.querySelector(".header__month-year");

headerDate.addEventListener("click", (e) => {
    const $this = e.target;
    if ($this.tagName === "IMG") {
        let button = $this.classList.contains("prev-month") ? "prev" : "next";
        changeMonth(button);
    }
});

// nextMonth.addEventListener("click", () => {
//     let currentMonth = parseInt(monthNumber.textContent);
//     currentMonth++;
//     if (currentMonth === 13) {
//         currentMonth = 1;
//     }
//     monthNumber.textContent = currentMonth;
// });

// 이벤트 리스너에 함수를 넣어 중복되는 코드를 축약가능 [챗GPT]
// function changeMonth(increment) {
//     let currentMonth = parseInt(monthNumber.textContent);
//     currentMonth += increment;
//     if (currentMonth === 0) {
//         currentMonth = 12;
//     } else if (currentMonth === 13) {
//         currentMonth = 1;
//     }
//     monthNumber.textContent = currentMonth;
// }

// prevMonth.addEventListener("click", () => {
//     changeMonth(-1); // 이전 월 버튼의 경우, increment 값을 -1로 전달합니다.
// });

// nextMonth.addEventListener("click", () => {
//     changeMonth(1); // 다음 월 버튼의 경우, increment 값을 1로 전달합니다.
// });

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
