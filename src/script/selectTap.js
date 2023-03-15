// 테스트용... 수정예정!!

const listTapBtn = document.querySelector('.list-btn');
const calendarTapBtn = document.querySelector('.calendar-btn');
const chartTapBtn = document.querySelector('.chart-btn');
const listTap = document.querySelector('.list-tap');
const calendarTap = document.querySelector('.calendar-tap');
const chartTap = document.querySelector('.chart-tap');

const onClickListBtn = () => {
    const btns = [...document.querySelectorAll('.header-taps button')];
    const taps = [...document.querySelectorAll('.main section')];

    btns.forEach(element => element.classList.remove("tap-active"));
    taps.forEach(element => element.classList.remove('hidden'));

    btns[0].classList.add("tap-active");
    taps[1].classList.add("hidden");
    taps[2].classList.add("hidden");
}

const onClickCalendarBtn = () => {
    const btns = [...document.querySelectorAll('.header-taps button')];
    const taps = [...document.querySelectorAll('.main section')];

    btns.forEach(element => element.classList.remove("tap-active"));
    taps.forEach(element => element.classList.remove('hidden'));

    btns[1].classList.add("tap-active");
    taps[0].classList.add("hidden");
    taps[2].classList.add("hidden");
}

const onClickChartBtn = () => {
    const btns = [...document.querySelectorAll('.header-taps button')];
    const taps = [...document.querySelectorAll('.main section')];

    btns.forEach(element => element.classList.remove("tap-active"));
    taps.forEach(element => element.classList.remove('hidden'));

    btns[2].classList.add("tap-active");
    taps[0].classList.add("hidden");
    taps[1].classList.add("hidden");
}

listTapBtn.addEventListener("click", onClickListBtn);
calendarTapBtn.addEventListener("click", onClickCalendarBtn);
chartTapBtn.addEventListener("click", onClickChartBtn);