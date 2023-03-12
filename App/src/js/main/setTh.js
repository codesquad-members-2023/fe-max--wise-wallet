import { addComma } from "../utils/addComma.js";

export const setTh = (array) => {
  // 수입
  let income = 0;
  // 지출
  let expenditure = 0;

  array.forEach((obj) => {
    obj.isPositive ? (income += obj.price) : (expenditure += obj.price);
  });

  const $tr = document.createElement("tr");
  const th = `<th colspan="4">
      <div id="main_header">
        <h3 id="main_total_history" class="body-large">
          전체 내역 <span>${array.length}</span> 건
        </h3>
         <div id="main_income_expenditure" class="body-medium">
         ${
           income !== 0
             ? `<div>
              <input type="checkbox" name="" id="income_toggle" checked="checked" />
              <label
                id="income_checkbox"
                class="history_checkbox"
                for="income_toggle"
              ></label>
              수입
              <span id="income_price">&nbsp;${addComma(income)}</span>
            </div>`
             : ``
         }
        
        ${
          expenditure !== 0
            ? `<div>
            <input type="checkbox" name="" id="expenditure_toggle" checked="checked" />
            <label
              id="expenditure_checkbox"
              class="history_checkbox"
              for="expenditure_toggle"
            ></label>
            지출
            <span id="expenditure_price">&nbsp;${addComma(expenditure)}</span>
          </div>
         </div>`
            : ``
        }
      </div>
    </th>`;

  $tr.innerHTML = th;

  return $tr;
};
