import { $ } from "../../utils/dom.js";
import { prevMonth } from "../../events/dateInfo/prevMonth.js";
import { nextMonth } from "../../events/dateInfo/nextMonth.js";


export const dateInfoHandler = () => {
    $('.previous-month-btn').addEventListener("click",prevMonth )
    $('.next-month-btn').addEventListener("click",nextMonth )
};
