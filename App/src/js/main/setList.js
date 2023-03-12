import { addComma } from "../utils/addComma.js";
import { getBgColor } from "./getBgColor.js";

export const setList = (array) => {
  const group = setGroup(array);
  const keys = Object.keys(group).sort((a, b) => b - a);
  const $tbody = document.createElement("tbody");
  const $main_history_list = document.getElementById("main_history_list");

  keys.forEach((key) => {
    // 수입
    let income = 0;
    // 지출
    let expenditure = 0;
    let list_tr = "";

    group[key].forEach((obj) => {
      if (obj.isPositive) {
        income += obj.price;
      } else {
        expenditure += obj.price;
        obj.price = obj.price * -1;
      }

      list_tr += `<tr class="list_tr ${
        obj.isPositive ? `income` : `expenditure`
      }_tr">
            <td>
              <input class="uniqueKey" value="${obj.uniqueKey}" />
              <input class="isEditing" type="checkbox" />
              <div
                class="history_category ${getBgColor(
                  obj.category_select
                )} bold-medium"
              >
              ${obj.category_select}
            </div>
            </td>
            <td>
                <div class="histoty_body body-medium primary">
                ${obj.content}
                </div>
            </td>
            <td>
                <div class="history_payment body-medium primary-alt-40">
                ${obj.payment}
                </div>
            </td>
            <td>
                <div class="history_price body-medium secondary-red">
                <div class="price_text">
                ${addComma(obj.price)} 원</div>
                <div class="cancel">삭제하기</div>
                </div>
            </td>
          </tr>`;
    });
    const date = key;

    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    const dateObj = new Date(`${year}-${month}-${day}`); // Date 객체 생성
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
      dateObj.getDay()
    ];

    let info_tr = `<tr class="info_tr">
          <td colspan="4">
            <div class="histoory_info">
              <div class="histoory_info_date primary">
                <span class="histoory_info_monthDay bold-medium"
                  >${Number(month)}월 ${day}일</span
                >
                <span
                  class="histoory_info_week bold-medium primary-alt-40"
                  >&nbsp;${dayOfWeek}</span
                >
              </div>
              <div class="histoory_info_price bold-medium primary-alt-40">
              ${
                income !== 0
                  ? "&nbsp;&nbsp;수입&nbsp;" + addComma(income) + " 원"
                  : ``
              }
              ${
                expenditure !== 0
                  ? "&nbsp;&nbsp;지출&nbsp;" + addComma(expenditure) + " 원"
                  : ``
              }

              </div>
            </div>
          </td>
        </tr>`;
    $tbody.innerHTML += info_tr;
    $tbody.innerHTML += list_tr;
    // 그냥 tr을 하나하나 넣고 마지막에 헤드를 맨앞에 넣으면 어떨가?
  });

  return $tbody;
};

const setGroup = (array) => {
  const group = {};
  array.forEach((obj) => {
    if (group.hasOwnProperty(obj.date)) {
      group[obj.date].push(obj);
    } else {
      group[obj.date] = [obj];
    }
  });
  return group;
};
