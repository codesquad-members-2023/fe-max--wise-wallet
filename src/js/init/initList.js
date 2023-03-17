export const initList = () => {
  if ($("#income-btn").checked) {
    // 총 건수 변화하는 함수
    // const template = inputStore.listArray.map(el=>{
    //     return
    // }).join("")
    // document.querySelector(".list-by-day").innerHTML = template
    // console.log(
    //   inputStore.listArray
    //     .filter((el) => el.type === true)
    //     .map((el) => el.date.slice(-2))
    // );
    // let incomeList = inputStore.listArray.filter((el) => el.type === true);
    // for (let i = 0; i < incomeList.length; i++) {
    //   const listDetail = document.createElement("li");
    //   document.querySelector(".list-datail-box").appendChild(listDetail);
    //   listDetail.innerHTML = `
    //         <div class="list-detail">
    //             <div class="list-detail-category ">
    //                 <span>${incomeList[i].categoryIn}</span>
    //             </div>
    //             <span class="list-detail-body ">${incomeList[i].memo}</span>
    //             <span class="list-detail-payment list-detail-item">${incomeList[i].paymentIn}</span>
    //             <span class="list-detail-price list-detail-item">+${incomeList[i].price}원</span>
    //             <button title="삭제하기" class="delete-btn">
    //             <img src="./src/images/delete-x.svg" alt="삭제">
    //             <span class="delete-text">삭제하기</span>
    //             </button>
    //         </div>
    //         `;
    //   if (
    //     incomeList[i].date !== incomeList[i + 1].date ||
    //     incomeList[i + 1].date === undefined
    //   ) {
    //     return;
    //   }
    // }
  }
  if ($("#expenditure-btn").checked) {
    // 총 건수 변화하는 함수
    const displayedMonthArray = inputStore.listArray.filter(
      (el) =>
        el.date.slice(4, 6) ===
        $(".header-month").textContent.toString().padStart(2, "0")
    );

    const expenditureArray = displayedMonthArray.filter(
      (el) => el.type === false
    );
    // const collectedDay = displayedMonthArray
    //   .filter((el) => el.type === false)
    //   .map((el) => el.date.slice(-2));
    const collectedDay = displayedMonthArray.map((el) => el.date.slice(-2));

    const setByDay = new Set(collectedDay); // [13,15,17] 등

    setByDay.forEach((element, index) => {
      const listByDay = document.createElement("li");
      listByDay.setAttribute("class", "list-body-layout");
      document.querySelector(".list-by-day-box").appendChild(listByDay);

      const listBody = document.createElement("div");
      listBody.setAttribute("class", "list-body");
      document.querySelector(".list-body-layout").appendChild(listBody);

      const listBodyInfo = document.createElement("div");
      listBodyInfo.setAttribute("class", "list-body-info");
      document.querySelector(".list-body").appendChild(listBodyInfo);

      const dayArray = expenditureArray.filter(
        (el) => el.date.slice(-2) === element
      );
      const unconvertedDate = dayArray.map((el) => el.date);

      document.querySelector(".list-body-info").innerHTML = `
            <div class="date-day">
                <span class="date-day-date">${
                  $(".header-month").textContent
                }월 ${element}일</span>
                <span class="date-day-day">${
                  DAY_NAME[getDay(unconvertedDate[0])]
                }</span>
            </div>
            <div class="income-expenditure">
                <span>수입</span>
                <span>2,010,580원</span>
                <span>지출</span>
                <span>9,500원</span>
            </div>
            `;

      const listDatailBox = document.createElement("ul");
      listDatailBox.setAttribute("class", "list-datail-box");
      document.querySelector(".list-body").appendChild(listDatailBox);

      for (let i = 0; i < dayArray.length; i++) {
        // 해당 날짜의 li 반복 생성시키기
        listDatailBox.innerHTML = `
            <li>
                <div class="list-detail">
                    <div class="list-detail-category">
                        <span>${dayArray[i].categoryIn}</span>
                    </div>
                    <span class="list-detail-body ">${dayArray[i].memo}</span>
                    <span class="list-detail-payment list-detail-item">${dayArray[i].paymentIn}</span>
                    <span class="list-detail-price list-detail-item">-${dayArray[i].price}원</span>
                    <button title="삭제하기" class="delete-btn">
                        <img src="./src/images/delete-x.svg" alt="삭제">
                        <span class="delete-text">삭제하기</span>
                    </button>
                </div>
            </li>
            `;
      }
    });
  }
};
