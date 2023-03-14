import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";
import { dateInput } from "./dateInput.js";

export const inputBarEventHandler = () => {
  $("#price-input").addEventListener("keyup", priceInput);
//   $("#date-Input").addEventListener("keydown", dateInput);
// editbtn클릭시/ 렌더
  
};
