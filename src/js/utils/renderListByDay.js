import { $ } from "./dom.js";
import { generateListBody } from "./generateListBody.js";
import { generateListDetail } from "./generateListDetail.js";

export const renderListByDay = () => {
  const obj = Object.keys(localStorage).map((el) =>
    JSON.parse(localStorage.getItem(el))
  );

  const sortedObj = obj.sort((a, b) => b.key - a.key);
  console.log(sortedObj);

  const [addedList, ...restLists] = sortedObj;

  const displayedYear = $(".header-year").textContent;
  const displayedMonth = $(".header-month").textContent.padStart(2, "0");
  const displayedYearMonth = `${displayedYear}${displayedMonth}`;
  const objByDisplayedDate = sortedObj.filter(
    (el) => el.date.slice(0, 6) === displayedYearMonth
  );

  console.log(objByDisplayedDate);

  if (addedList.date.slice(0, 6) !== displayedYearMonth) {
    //방금 추가한 리스트의 날짜가 현재 화면의 연월과 다르면
    return; // 렌더링을 막는다...!?
  } else {
    //방금 추가한 리스트 날짜의 '일'과 같은 항목들을 필터한 것이 2개 이상(>1)이라면 해당 날짜 ul안에 붙이기만,
    //방금 추가한 리스트 날짜의 '일'과 같은 항목들을 필터한 것이 1개(방금생성된것만있다면)라면 새로운 날짜 ul바디도 만들어준다
    const sameDayLists = objByDisplayedDate.filter(el=> el.date.slice(-2) === addedList.date.slice(-2)) 
    if(sameDayLists.length > 1){
      generateListDetail(addedList);
    }else if(sameDayLists.length === 1){
      generateListBody(addedList);
      generateListDetail(addedList);
    }
  }

  // const objDate = obj.filter(
  //   (el) => el.date.slice(0, 6) === $("#date-input").value.slice(0, 6)
  // );

  // const sameDayArray = objDate.filter(
  //   (el) => el.date.slice(-2) === $("#date-input").value.slice(-2)
  // );


  // const [addedList, ...restLists] = objByDisplayedDate
  // console.log(addedList)

  // 다른날짜로 바꾸고 같은 날짜가 하나 초과일때 추가하면 이전의 내용이 추가됨..
  // 지금 추가하려는 거 하나가, 화면상의 연월과 다르면 추가되면 안됨

  // if (sameDayArray.length === 1) {
  //   generateListBody(sameDayArray);
  //   generateListDetail(sameDayArray);
  // }
  // if (sameDayArray.length > 1) {
  //   generateListDetail(sameDayArray);
  // }

};
