import { addComma } from "../utils/addComma.js";
import { getLocalStorage } from "../localStorage/getLocalStorage.js";

export const setText = () => {
  // 수입
  let income = 0;
  // 지출
  let expenditure = 0;
  const data = getLocalStorage();

  data.forEach((e) => {
    e.isPositive ? (income += e.price) : (expenditure += e.price);
  });
  const incomeText = income > 0 ? `총 수입 ${addComma(income)}원` : "";
  const expenditureText =
    expenditure > 0 ? `총 지출 ${addComma(expenditure)}원` : "";
  const $rigtText = document.createElement("div");
  const $leftText = document.createElement("div");

  $rigtText.classList.add("primary", "bold-medium");
  $rigtText.textContent = `총합 ${addComma(income - expenditure)}원`;

  $leftText.textContent = `${incomeText} ${expenditureText}`;
  $leftText.classList.add("primary-alt", "bold-medium");
  const $textDiv = document.createElement("div");
  $textDiv.id = "calender_Text";
  $textDiv.appendChild($leftText);
  $textDiv.appendChild($rigtText);

  return $textDiv;
};
