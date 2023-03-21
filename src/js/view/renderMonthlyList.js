import { $ } from "../utils/dom.js";
import { getDayOfWeek } from "../utils/getDayOfWeek.js";

export const renderMonthlyList = () => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );
  console.log(obj)

  const displayedYear = $(".header-year").textContent;
  const displayedMonth = $(".header-month").textContent.padStart(2, "0");
  const displayedYearMonth = `${displayedYear}${displayedMonth}`;
  const objByDisplayedDate = obj.filter(
    (el) => el.date.slice(0, 6) === displayedYearMonth
  );
  console.log(objByDisplayedDate)

  const groupValues = objByDisplayedDate.reduce((acc, cur) => {
    acc[cur.date] = acc[cur.date] || [];
    acc[cur.date].push(cur);
    return acc;
  }, {});

  // 위에서 만든 객체를 key로 돌려서 새로운 객체 return
  const groups = Object.keys(groupValues).map((key) => {
    return { date: key, values: groupValues[key] };
  });
  console.log(groups)

  // 디스플레이된 연월 기준으로 리스트를 필터한다
  // 날짜 단위로 데이터를 묶어준다
  // 새로 렌더링을 위해 싹 지운다..?
  // 날짜 안에서 반복 돌며 리스트를 더해준다




  let htmlString = "";
  groups.forEach(element => {
      console.log(element.date)
      htmlString += `
      <li class="list-by-day">
          <div class="list-body">
          <div class="list-body-info">
              <div class="date-day">
              <span class="date-day-date">${element.date.slice(
                4,
                6
              )}월 ${element.date.slice(-2)}일</span>
              <span class="date-day-day">${getDayOfWeek()}</span>
              </div>
              <div class="income-expenditure">
              <span>수입</span>
              <span>2,010,580원</span>
              <span>지출</span>
              <span>9,500원</span>
              </div>
          </div>
          <ul class="list-datail-box list-date-${element.date}">
          </ul>
          </div>
      </li>
      `
  });
  document.querySelector('.list-by-day-box').innerHTML = htmlString
  

  // document.querySelector(".list-by-day-box").insertAdjacentHTML(
  //   "beforeend",
  //   `
  //   <li class="list-by-day">
  //       <div class="list-body">
  //       <div class="list-body-info">
  //           <div class="date-day">
  //           <span class="date-day-date">${$("#date-input").value.slice(
  //             4,
  //             6
  //           )}월 ${$("#date-input").value.slice(-2)}일</span>
  //           <span class="date-day-day">${getDayOfWeek()}</span>
  //           </div>
  //           <div class="income-expenditure">
  //           <span>수입</span>
  //           <span>2,010,580원</span>
  //           <span>지출</span>
  //           <span>9,500원</span>
  //           </div>
  //       </div>
  //       <ul class="list-datail-box list-date-${sameDayArray[0].date}">
  //       </ul>
  //       </div>
  //   </li>
  //   `
  // );
};
