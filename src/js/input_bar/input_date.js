import "./input_date_datePicker.js";
import { common } from "./input_bar_common.js";

common.date.value = new Date()
  .toISOString()
  .substring(0, 10)
  .replace(/[^0-9]/g, "");
