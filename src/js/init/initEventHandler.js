import { inputBarEventHandler } from "../events/inputBar/index.js";
import { tabsEventHandler } from "../events/tabs/index.js";
import { dateInfoHandler } from "../events/dateInfo/index.js";

export const initEventHandler = () =>{
    inputBarEventHandler()
    tabsEventHandler()
    dateInfoHandler()
}