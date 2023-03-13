import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";


export const inputBarEventHandler = () => {
    $('#price-input').addEventListener("keyup",priceInput)
};
